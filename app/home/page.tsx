import HeaderFooter from "../../template/HeaderFooter";

export default function HomePage() {
	return (
		<HeaderFooter>
			<main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-16">
				<section className="max-w-2xl space-y-4">
					<p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
						Home
					</p>
					<h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
						Tugas projek dari kak adit.
					</h1>
					<p className="text-base leading-7 text-zinc-600 sm:text-lg">
						by aul dan ary
					</p>
				</section>
			</main>
		</HeaderFooter>
	);
}