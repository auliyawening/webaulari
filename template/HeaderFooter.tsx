import Link from "next/link";

type HeaderFooterProps = {
	children: React.ReactNode;
};

export default function HeaderFooter({ children }: HeaderFooterProps) {
	return (
		<div className="flex min-h-screen flex-col bg-amber-100 text-zinc-900">
			<header className="border-b border-zinc-200 bg-amber-200 backdrop-blur">
				<div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
					<Link href="/" className="text-lg font-semibold tracking-tight">
					</Link>
					<nav className="flex items-center gap-5 text-sm text-zinc-400">
						<Link href="/home" className="transition-colors hover:text-zinc-900">
							Home
						</Link>
						<Link href="/about" className="transition-colors hover:text-zinc-900">
							Tentang
					</Link>
					<Link href="/category" className="transition-colors hover:text-zinc-900">
						Kategori
					</Link>
				</nav>
				</div>
			</header>

			<div className="flex-1">{children}</div>

			<footer className="border-t border-zinc-200 bg-amber-200">
				<div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
					<p>© 2026 Contoh Aja</p>
				</div>
			</footer>
		</div>
	);
}