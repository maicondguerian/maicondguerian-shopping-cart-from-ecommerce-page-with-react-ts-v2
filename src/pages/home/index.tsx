interface HomePageProps {
    pageTitle?: string;
}
export default function HomePage({ pageTitle = "defaltName" }: HomePageProps) {
    return (
        <>
            <h1>home  {pageTitle} </h1>
        </>
    );
}