export default function Navigation() {
  return (
    <div className="h-[85px] w-full bg-primary_2 flex items-center">
      <div className="flex justify-between items-center px-8 py-8 w-full">
        <h1 className="text-2xl">LOGO</h1>

        <div className="flex items-center gap-[40px]">
          <ul className="flex gap-10 text-lg">
            <li>Home</li>
            <li>Career</li>
            <li>Blog</li>
            <li>About Us</li>
          </ul>
          <button className="w-[130px] h-[50px] bg-white text-text_primary rounded-3xl">
            Login{" "}
          </button>
          <button className="w-[130px] h-[50px] bg-primary text-white rounded-3xl">Sign Up </button>
        </div>
      </div>
    </div>
  );
}
