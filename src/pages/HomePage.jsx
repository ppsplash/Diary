function HomePage() {
  const cards = JSON.parse(localStorage.getItem("Diaries"));
  console.log(cards);
  return (
    <main className="min-h-screen">
      <div
        className="hero min-h-screen flex flex-wrap gap-6 p-10 items-start justify-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1635840563538-3ae09be0ec34?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRpYXJ5JTIwaW1hZ2VzJTIwYXMlMjBhJTIwYmFja2dyb3VuZCUyMGZvciUyMHdlYnBhZ2V8ZW58MHx8MHx8fDA%3D)",
        }}
      >
        {cards.length > 0 ? (
          cards.map((card) => (
            <div key={card.date} className="card bg-orange-200 w-96 shadow-sm">
              <figure className="px-10 pt-10">
                <img src={card.url} alt="your memory" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{card.date}</h2>
                <p>{card.title}</p>
                <div className="card-actions">
                  <button className="btn bg-red-800 text-white text-xl rounded-2xl">To View</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-white text-2xl bg-black/50 p-4 rounded">No diary entries found.</h2>
        )}
      </div>
    </main>
  );
}

export default HomePage;
