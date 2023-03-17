import MainNavigation from '../components/MainNavigation';
const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An Error Occured!</h1>
        <p>Could not find page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
