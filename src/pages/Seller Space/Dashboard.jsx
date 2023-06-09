import React from "react"
import { Link, defer, Await, useLoaderData } from "react-router-dom"
import { requireAuth } from "../../utils"
import { getHostShoes } from "../../api"

export async function loader({ request }) {
    // await requireAuth(request)
    return defer({ shoes: getHostShoes() })
    
}

export default function Dashboard() {
    const dataPromise = useLoaderData()

    function renderShoeElements(shoes) {
        console.log(shoes)
        const hostShoeEls = shoes.map((shoe) => (
            
            <div className="sellerSpace-shoe-single" key={shoe.id}>
                <img src={shoe.imageUrl} alt={`Photo of ${shoe.name}`} />
                <div className="sellerSpace-shoe-info">
                    <h3>{shoe.name}</h3>
                    <p>${shoe.price}/day</p>
                </div>
                <Link to={`sneakers/${shoe.id}`}>View</Link>
            </div>
        ))

        return (
            <div className="sellerSpace-shoe-list">
                <section>{hostShoeEls}</section>
            </div>
        )
    }

    return (
        <>
            <section className="sellerSpace-dashboard-earnings">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to="income">Details</Link>
            </section>
            <section className="sellerSpace-dashboard-reviews">
                <h2>Review score</h2>
                <p>
                    <span>5.0</span>/5
                </p>
                <Link to="reviews">Details</Link>
            </section>
            <section className="sellerSpace-dashboard-vans">
                <div className="top">
                    <h2>Your listed vans</h2>
                    <Link to="sneakers">View all</Link>
                </div>
                <React.Suspense fallback={<h3>Loading...</h3>}>
                    <Await resolve={dataPromise.shoes}>{renderShoeElements}</Await>
                </React.Suspense>
            </section>
        </>
    )
}