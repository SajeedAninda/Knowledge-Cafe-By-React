import profile from "../assets/images/profile.png"
export default function Header() {
    return (
        <header className="flex justify-between items-center py-4 border-b border-gray-400">
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            <img className="w-12" src={profile} alt="" />
        </header>
    )
}