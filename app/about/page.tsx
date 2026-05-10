import Card from "@/template/InfoCard";
import HeaderFooter from "../../template/HeaderFooter";

export default function AboutPage() {
	return (
		<HeaderFooter>
			<div
				className="min-h-screen bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage:
						"url('./foto-suami.jpeg')",
				}}
			>
				<main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-16">
					<section className="max-w-2xl space-y-4 backdrop-blur-sm bg-white/40 p-6 rounded-2xl">
						<Card
							Nama={"Auliya Wening"}
							Kelas={"XI Rekayasa Perangkat Lunak (RPL)"}
							Sekolah={"SMKN 7 BANDAR LAMPUNG"}
							GrupIdol={"Enhypen"}
							Bias={"Park Sunghoon"}
						/>

						<Card
							Nama={"Aryani c.e.o.my"}
							Kelas={"XI Rekayasa Perangkat Lunak (RPL)"}
							Sekolah={"SMKN 7 BANDAR LAMPUNG"}
							GrupIdol={"Enhypen"}
							Bias={"Park jongseong"}
						/>
					</section>
				</main>
			</div>
		</HeaderFooter>
	);
}