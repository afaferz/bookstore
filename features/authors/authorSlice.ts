import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { addAuthor, editAuthor, deleteAuthor, listAuthor, detailAuthor } from './authorAPI';
import { IAuthor } from './@types/Authors';

export interface AuthorState {
    authorsList: IAuthor[]
    author: IAuthor,
    status: 'loading' | 'idle' | 'failed' | ''
}

const initialState: AuthorState = {
    authorsList: [],
    author: {
        name: ''
    },
    status: ''
};

// Actions ASYNC
export const addAsync = createAsyncThunk(
    'author/addAuthor',
    async (authorObj: IAuthor) => {
        try {
            await addAuthor(authorObj)
        } catch (error) {
            console.log(error)
        }
    }
)
export const editAsync = createAsyncThunk(
    'author/editAuthor',
    async (author: IAuthor) => {
        try {
            const response = await editAuthor(author)
            console.log(response)
        } catch (error) {

        }
    }
)
export const deleteAsync = createAsyncThunk(
    'author/deleteAuthor',
    async (authorId: number) => {
        try {
            const response = await deleteAuthor(authorId)
            console.log(response)
        } catch (error) {

        }
    }
)
export const listAsync = createAsyncThunk(
    'author/listAuthor',
    async () => {
        const response = await listAuthor()
        return response.data
    }
)
export const detailAsync = createAsyncThunk(
    'author/detailAuthor',
    async (authorId: number) => {
        const response = await detailAuthor(authorId)
        return response.data
    }
)

export const author = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeAuthor: (state, action: PayloadAction<{ field: string, value: any }>) => {
            const { field, value } = action.payload;
            (state.author as any)[field] = value
        },
        changeAuthorList: (state, action: PayloadAction<IAuthor[]>) => {
            state.authorsList = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addAsync.fulfilled, (state) => {
                state.status = 'idle';
            })
            .addCase(addAsync.rejected, (state) => {
                state.status = 'failed';
            });
        builder
            .addCase(listAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(listAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.authorsList = action.payload
            })
            .addCase(listAsync.rejected, (state) => {
                state.status = 'failed';
            });
        builder
            .addCase(detailAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(detailAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.author = action.payload
            })
            .addCase(detailAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { changeAuthor, changeAuthorList } = author.actions;

export const selectAuthor = (state: RootState) => state.author.author
export const selectAuthorName = (state: RootState) => state.author.author.name;
export const selectAuthorList = (state: RootState) => state.author.authorsList;

export default author.reducer;
