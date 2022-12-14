import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav"
import Card from "../../components/Card/Card"
import DefaultLayout from "../../layouts/Default";



function idex() {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = await fetch('/api/cats');
    const data = await response.json();
    console.log(data);
    setCats(data);
  }

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <>
      <DefaultLayout>

        <div className="container mt-5">

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {cats.map(cat => (
              <Card key={cat.id}
                name={cat.name}
                phone={cat.phone}
                email={cat.email}
                image={cat.image}
                id={cat.id}
              />
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}

export default idex