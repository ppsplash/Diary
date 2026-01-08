function Hero() {
  return (
    <>
      <main className="flex-1 overflow-hidden">
        <div
          className="hero h-full bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1635840563538-3ae09be0ec34?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRpYXJ5JTIwaW1hZ2VzJTIwYXMlMjBhJTIwYmFja2dyb3VuZCUyMGZvciUyMHdlYnBhZ2V8ZW58MHx8MHx8fDA%3D)",
          }}
        >
          <div className="hero-overlay bg-orange-900/40"></div>
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">If you would like to create a Personal Diary.Start it by clicking the below button</p>
              {/* The button to open modal */}
              <label htmlFor="my_modal_6" className="btn bg-fuchsia-300 rounded-3xl w-1/3">
                Add Entry
              </label>
              <input type="checkbox" id="my_modal_6" className="modal-toggle" />
              <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  </div>
                  <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                      <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div>
                          <a className="link link-hover">Forgot password?</a>
                        </div>
                        <button className="btn btn-neutral mt-4">Login</button>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
