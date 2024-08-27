export default function Navbar() {
  return (
    <div className="w-full text-white h-20 flex justify-between items-center px-20">
        <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <ul className="flex items-center gap-8">
            <li>Services</li>
            <li>Products</li>
            <li>About</li>
            <li>Banking</li>
        </ul>
    </div>
  )
}
