const Login = ({
  handleSubmit,
  username,
  setUsername,
  setPassword,
  password,
}) => {
  return (
    <main className="w-full flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col w-100 gap-4">
        <input
          type="text"
          placeholder="username"
          className="p-2 border-b w-full"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 border-b w-full"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          type="submit"
          className="active:opacity-70 bg-blue-500 rounded-md text-white py-2 cursor-pointer w-full"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Login;
