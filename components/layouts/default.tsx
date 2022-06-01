import type { ReactElement } from 'react';

export default function Layout({ children }: { children: ReactElement }) {
    return (
        <>
            <nav>TEST</nav>
            <main>{children}</main>
            <footer>FOOTER</footer>
        </>
    );
}
