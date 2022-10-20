import Nav from "../components/Nav/Nav"

function DefaultLayout({children}) {
  return (
    <div>
        <Nav />
        <main>
            {children}
        </main>
    </div>
  )
}

export default DefaultLayout