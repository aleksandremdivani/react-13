const Home = ({ user }) => {
  return <main>
    {user && <h1>Hello {user.firstName}</h1>}
    </main>;
};
export default Home;
