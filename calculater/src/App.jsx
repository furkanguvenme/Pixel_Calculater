import { useState } from "react";
import "./App.css";

function App() {
  const [size, setSize] = useState({
    genislik: 0,
    mevcutGenislik: 0,
    yukseklik: 0,
    mevcutYukseklik: 0,
    genislikPx: 0,
    yükseklikPx: 0,
    genislikVw: 0,
    yükseklikVh: 0,
  });

  const handleGenislik = (e) => {
    if (e.target.id == "weight") {
      setSize({ ...size, genislik: e.target.value });
    }
    if (e.target.id == "weightx") {
      setSize({ ...size, mevcutGenislik: e.target.value });
    }
    if (e.target.id == "height") {
      setSize({ ...size, yukseklik: e.target.value });
    }
    if (e.target.id == "heightx") {
      setSize({ ...size, mevcutYukseklik: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSize({
      ...size,
      genislikPx:
        Math.round(((size.mevcutGenislik * 1920) / size.genislik) * 100) / 100,
      yükseklikPx:
        Math.round(((size.mevcutYukseklik * 1080) / size.yukseklik) * 100) /
        100,
      genislikVw:
        Math.round(
          ((size.mevcutGenislik * 1920) / size.genislik / 1920) * 100 * 100
        ) / 100,
      yükseklikVh:
        Math.round(
          ((size.mevcutYukseklik * 1080) / size.yukseklik / 1080) * 100 * 100
        ) / 100,
    });
  };

  const handleDelete = () => {
    setSize({
      genislik: 0,
      mevcutGenislik: 0,
      yukseklik: 0,
      mevcutYukseklik: 0,
      genislikPx: 0,
      yükseklikPx: 0,
      genislikVw: 0,
      yükseklikVh: 0,
    });
  };

  return (
    <>
      <div>
        <h1 className="text-[36px] mb-[30px]">1920x1080 Calculate</h1>
        <div className="flex flex-row items-center gap-x-[50px]">
          <form onSubmit={handleSubmit}>
            <label
              className="mb-[10px] text-[orange] font-bold"
              htmlFor="weight"
            >
              Ekran Width Girin
            </label>
            <input
              className="mb-[10px]"
              type="number"
              id="weight"
              onChange={handleGenislik}
            ></input>
            <label
              className="mb-[10px] text-[orange] font-bold"
              htmlFor="weightx"
            >
              Mevcut Weight Girin
            </label>
            <input
              className="mb-[10px]"
              type="number"
              id="weightx"
              onChange={handleGenislik}
            ></input>
            <label
              className="mb-[10px] text-[orange] font-bold"
              htmlFor="height"
            >
              Ekran Height Girin
            </label>
            <input
              className="mb-[10px]"
              type="number"
              id="height"
              onChange={handleGenislik}
            ></input>
            <label
              className="mb-[10px] text-[orange] font-bold"
              htmlFor="heightx"
            >
              Mevcut Height Girin
            </label>
            <input
              className="mb-[10px]"
              type="number"
              id="heightx"
              onChange={handleGenislik}
            ></input>
            <button className="border-[orange]">Hesapla</button>
          </form>
          <div>
            <p>
              Width: <span className="text-[red]">{size.genislikPx}</span> px
            </p>
            <p>
              Width: <span className="text-[red]">{size.genislikVw}</span> vw
            </p>
            <p>
              Height: <span className="text-[red]">{size.yükseklikPx}</span> px
            </p>
            <p>
              Height: <span className="text-[red]">{size.yükseklikVh}</span> vh
            </p>
            <button onClick={handleDelete}>Sil</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
