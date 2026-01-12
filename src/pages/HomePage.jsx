import { useState } from "react";
import { Link, useNavigate } from "react-router";

function HomePage() {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigation = useNavigate();
  const cards = JSON.parse(localStorage.getItem("Diaries")) || [];
  console.log(cards);
  return (
    <main className="flex h-screen overflow-hidden">
      <div
        className="hero h-screen flex flex-wrap gap-6 p-5 items-start justify-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1635840563538-3ae09be0ec34?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRpYXJ5JTIwaW1hZ2VzJTIwYXMlMjBhJTIwYmFja2dyb3VuZCUyMGZvciUyMHdlYnBhZ2V8ZW58MHx8MHx8fDA%3D)",
        }}
      >
        {cards.length > 0 ? (
          cards.map((card) => (
            <div key={card.date} className="card bg-orange-200 w-50 shadow-sm">
              <figure className="px-10 pt-10">
                <img src={card.url} alt="image" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{card.date}</h2>
                <p>{card.title}</p>
                <div className="card-actions">
                  <button onClick={() => setSelectedCard(card)} className="btn bg-red-800 text-white border-none px-8">
                    To View
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-white text-8xl bg-black/50 p-4 rounded ">No diary entries found.</h2>
        )}
      </div>
      {selectedCard && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          {/* Modal Content Card */}
          <div className="card bg-white shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <figure className="h-64 overflow-hidden">
              <img src={selectedCard.url} alt="Entry cover" className="w-full h-full object-cover" />
            </figure>

            <div className="card-body">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="card-title text-2xl font-bold">{selectedCard.title}</h2>
                  <p className="text-gray-500 italic">{selectedCard.date}</p>
                </div>
              </div>

              <div className="mt-4 text-gray-700 leading-relaxed">{selectedCard.content}</div>

              <div className="card-actions justify-end mt-6">
                <button onClick={() => setSelectedCard(null)} className="btn bg-red-800 text-white border-none px-8">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <button onClick={() => navigation(-1)} className="fixed top-25 left-8 bg-orange-200 px-4 py-2 rounded-lg font-bold hover:bg-red-300 ">
        Back
      </button>
      {/* <Link className="fixed top-25 left-8 bg-orange-200 px-4 py-2 rounded-lg font-bold hover:bg-red-300 " to="/">
        Back to Mainpage
      </Link> */}
    </main>
  );
}

export default HomePage;
