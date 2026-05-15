"use client"

import { useEffect, useState } from "react";
import HeaderFooter from "../../template/HeaderFooter";

const columns = [
  { key: "name", title: "Nama", className: "w-4 px-7 py-4" },
  { key: "description", title: "Deskripsi", className: "w-7 px-7 py-4" },
  { key: "price", title: "Harga", className: "w-1/4 px-7 py-4 text-right" },
] as const;

type Column = (typeof columns)[number];

type CategoryItem = {
  name?: string;
  description?: string;
  price?: number;
};

export default function CategoryPage() {
  const [data, setData] = useState<CategoryItem[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://api.ambismart.web.id/api/category");
      const json = await response.json();
      setData(json.data ?? []);
    };

    fetchCategories().catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <HeaderFooter>
      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <section className="mb-10 space-y-3">
          <h1 className="text-sm font-medium uppercase tracking-[0.4em] text-zinc-500">
            Daftar Kategori
          </h1>
        </section>

        <div className="grid gap-10">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto divide-y divide-zinc-200 text-left text-sm text-zinc-400">
              <thead className="text-sm bg-zinc-100 text-zinc-950">
                <tr>
                  {columns.map((column) => (
                    <th key={column.key} className={column.className}>
                      {column.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white">
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white hover:bg-black/4" : "bg-zinc-100 hover:bg-black/4"}
                  >
                    {columns.map((column) => {
                      const value =
                        column.key === "price"
                          ? item.price != null
                            ? `Rp ${item.price.toLocaleString()}`
                            : "-"
                          : item[column.key] ?? "-";

                      return (
                        <td key={column.key} className={column.className}>
                          {value}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </HeaderFooter>
  );
}
