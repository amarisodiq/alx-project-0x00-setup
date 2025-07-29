import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />

            <Button title="Rounded Sm" styles="px-3 py-1 mx-2 bg-blue-500 text-sm rounded-sm"/>
            <Button title="Rounded md" styles="px-3 py-1 mx-2 bg-green-500 text-md rounded-md"/>
            <Button title="Rounded lg" styles="px-3 py-1 mx-2 bg-green-500 text-md rounded-lg"/>
            <Button title="Rounded full" styles="px-3 py-1 mx-2 bg-green-500 text-lg rounded-full"/>
        </div>
    )
}
export default Landing 