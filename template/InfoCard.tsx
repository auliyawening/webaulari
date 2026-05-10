export default function Card({Nama, Kelas, Sekolah, GrupIdol, Bias, color = "cyan-600"}){
 return(
    <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            About
        </p>
        <h1 className={`text-4xl font-semibold tracking-tight text-${color} sm:text-5xl`}>
            Data Diri :
            Punya {Nama}
        </h1>
        <p className="text-base leading-7 text-blue-800 sm:text-lg">
            Nama : {Nama}
        </p>
        <p className="text-base leading-7 text-blue-800 sm:text-lg">
        Kelas : {Kelas}
        </p>
        <p className="text-base leading-7 text-blue-800 sm:text-lg">
        Nama Sekolah : {Sekolah}
        </p>
            <p className="text-base leading-7 text-blue-800 sm:text-lg">
            Grup idol : {GrupIdol}, Bias : {Bias}
        </p>
    </div>
 )

}