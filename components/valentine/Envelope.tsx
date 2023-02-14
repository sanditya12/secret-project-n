import Router, { useRouter } from "next/router";
import { useUser } from "../../hooks/useUser";
import { HiHeart } from "react-icons/hi";
import { useState } from "react";

interface Props {
  className?: string;
}

const Envelope = ({ className }: Props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`envelope relative duration-[400ms] ${
        clicked && "translate-y-[26rem]"
      }`}
    >
      <div
        className={`back relative w-[70vw] h-[80vh] rounded-lg shadow-[5px_5px_3px_0px_rgba(186,182,175,0.59)] `}
      ></div>
      <div
        className={` letter absolute p-6 bg-valentine-very-light rounded-lg w-[65vw] mt-3 h-[73vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-[500ms] shadow-[5px_5px_3px_0px_rgba(186,182,175,0.59)] ${
          clicked && "-translate-y-[56rem] z-[3] h-[101vh]"
        }`}
      >
        <h2 className="font-bold">Hey Sha,</h2>
        <div className="text text-[#554640] pt-2">
          Pertama-tama, aku mau bilang makasih karena udah mau jadi valentine
          aku🥰. Aku tau kita belum bisa ketemu dan bakal banyak story date yang
          akan muncul di feeds story ig kita T_T. Tapi walau begitu aku tetep
          pingin banget kita ngerayain hari ini sebisa kita. Karena mungkin, aku
          sedikit berharap kalau nanti tahun depan kalau kita akhirnya diberi
          kesempatan buat ngerayain valentine dan ngerayain dengan ketemu
          langsung, kita bakal bisa lihat kembali hari ini dan lebih bersyukur
          terhadap apa yang akan kita punya nanti. Aku harap kita bisa mengingat
          lagi hari ini sebagai hari valentine pertama yang kita jalani bersama,
          di tahun depan maupun tahun-tahun berikutnya lagi. <br />
          <br />
          Disini aku kasih kamu bunga lily karena kamu suka itu kan 😊 trus aku
          pilih warna kuning karena katanya lily kuning melambangkan rasa senang
          dan bersyukur. Dan itu persis yang aku ingin rayakan hari ini. Aku
          bersyukur banget bisa merayakan hari kasih sayang dengan orang yang
          aku sangat sayangi🥰 Aku ngerasa banyak banget tema dari hubungan kita
          yang tentang bersyukur. Menurut aku itu sih yang paling aku suka dari
          kita. Aku suka kita bisa mendapat damai dengan menghabiskan waktu
          bersama, trus bisa mencari kebahagiaan yang "cukup" untuk kita berdua
          serta untuk kita masing2. Aku senang akan semua petualangan yang kita
          udah hadapin selama ini. Aku senang semua tantangan2nya juga. Aku
          ngerasa banyak banget yang aku tahu ttg kamu dari semua itu.. dan dari
          situ aku bisa jadi lebih paham sama kamu... dan ternyata, aku seneng
          dengan itu :)
          <br />
          Aku juga ngerasa kamu lebih mengenal aku. Dari kamu yang selalu care
          dan bangunin aku, kamu yang suka kasih kata2 karena tau aku suka itu,
          sampe kamu yang selalu mau jadi pendengar dan bahkan enjoy buat share
          momen2 emotional dengan aku. Aku seneng kamu paham sama aku bby.. I
          love you grateful to have you❤️
        </div>
      </div>
      <div className={`front`}></div>
      <div className={`front-left`}></div>
      {/* <div className={`top ${clicked && ""}`}></div> */}
      <HiHeart
        onClick={() => {
          setClicked((prev) => !prev);
        }}
        className=" absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 text-[#F97B67]"
      />
    </div>
  );
};

export default Envelope;
