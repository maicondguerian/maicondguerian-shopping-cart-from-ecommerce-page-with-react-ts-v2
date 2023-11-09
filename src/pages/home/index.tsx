interface HomePageProps {
    pageTitle?: string;
}
export default function HomePage({ pageTitle = "defaltName" }: HomePageProps) {
    return (
        <div style={{ height: "100vh" }} >
            <h1>home  {pageTitle} </h1>
        </div>
    );
}