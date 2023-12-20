
import Link from "next/link"

const Account = () => {
    return (
        <div className="centerAll h-[80vh]">
            <Link className="btn btn-info" href={`/login`}>
                Login
            </Link>
        </div>
    )
}

export default Account