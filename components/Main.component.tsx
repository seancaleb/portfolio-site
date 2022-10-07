type MainProps = {
    children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
    return (
        <main className="min-h-screen bg-primary-dark pb-40 relative overflow-hidden font-helvetica">
            {children}
        </main>
    );
};

export default Main;
