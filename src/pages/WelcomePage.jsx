import { useEffect, useState } from "react";
import { useNavigation } from "react-router";

export default function HomePage() {
  const [isClicked, setIsClicked] = useState(false);
  const [entry, entryList] = useState(() => {
    return JSON.parse(localStorage.getItem("Diaries")) || [];
  });
  useEffect(() => {
    localStorage.setItem("Diaries", JSON.stringify(entry));
  }, [entry]);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "Loading";
  const saveEntry = (e) => {
    e.preventDefault();
    const dataInput = e.target.elements.date.value;
    const dateExists = entry.some((entry) => entry.date === dataInput);
    if (!dateExists) {
      const newEntry = {
        title: e.target.elements.title.value,
        date: e.target.elements.date.value,
        url: e.target.elements.image.value,
        content: e.target.elements.content.value,
      };
      entryList([newEntry, ...entry]);
    } else {
      alert("You cannot have an entry for the same day!!!");
    }
    setIsClicked(false);
  };
  return (
    <>
      <main className="flex h-screen w-screen overflow-hidden">
        <div
          className="hero bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1635840563538-3ae09be0ec34?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRpYXJ5JTIwaW1hZ2VzJTIwYXMlMjBhJTIwYmFja2dyb3VuZCUyMGZvciUyMHdlYnBhZ2V8ZW58MHx8MHx8fDA%3D)",
          }}
        >
          <div className="hero-overlay bg-orange-900/10"></div>
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">If you would like to create a Personal Diary.Start it by clicking the below button</p>
              {/* The button to open modal */}
              <button onClick={() => setIsClicked(true)} className="btn bg-orange-200 rounded-xl text-xl">
                Add Entry
              </button>
              {isClicked && (
                <div className="modal modal-open" role="dialog">
                  <div className="modal-box bg-orange-200">
                    <h2 className="text-2xl font-bold font-serif">Sketch your memories here</h2>
                    <form onSubmit={saveEntry} className="flex flex-col gap-4">
                      <label htmlFor="title" className="flex flex-col gap-2 text-xl font-semibold text-left">
                        Title
                        <input type="text" name="title" id="title" required className="border border-gray-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-amber-500" />
                      </label>
                      <label htmlFor="date" className="flex flex-col gap-2 text-xl font-semibold text-left">
                        Date
                        <input type="date" name="date" id="date" required className="border border-gray-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-amber-500" />
                      </label>
                      <label htmlFor="image" className="flex flex-col gap-2 text-xl font-semibold text-left">
                        Image URL
                        <input type="url" name="image" id="image" required className="border border-gray-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-amber-500" />
                      </label>
                      <label htmlFor="content" className="flex flex-col gap-2 text-xl font-semibold text-left">
                        Content
                        <textarea type="textarea" name="content" id="content" required className="border border-gray-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-amber-500" />
                      </label>
                      <div className="modal-action">
                        <button type="button" onClick={() => setIsClicked(false)} className="btn text-xl">
                          Close!
                        </button>
                        <button type="submit" className="btn btn-primary text-xl">
                          Save Entry
                        </button>
                      </div>
                      {isSubmitting && <div>Submitting...</div>}
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
