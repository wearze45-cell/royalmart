"use client";

import { useEffect, useState } from "react";

export default function FiltersPage() {
  const [groups, setGroups] = useState<any[]>([]);
  const [name, setName] = useState("");

  async function load() {
    const res = await fetch("/api/filters");
    const data = await res.json();
    setGroups(data);
  }

  async function addGroup() {
    if (!name) return;

    await fetch("/api/filters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    setName("");
    load();
  }

  async function addOption(groupId: number) {
    const option = prompt("Option name (example: XL, Black, Male)");
    if (!option) return;

    await fetch("/api/filters/options", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ groupId, name: option }),
    });

    load();
  }

  async function deleteOption(id: number) {
    await fetch("/api/filters/options", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">Filters Manager</h1>

      {/* Create Group */}
      <div className="bg-white p-4 border rounded-lg max-w-sm space-y-3">
        <input
          className="border p-2 rounded w-full"
          placeholder="Filter Group (Size / Color / Gender)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={addGroup}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Add Group
        </button>
      </div>

      {/* Groups */}
      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div key={group.id} className="bg-white border p-4 rounded-lg">

            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold">{group.name}</h2>

              <button
                onClick={() => addOption(group.id)}
                className="text-xs bg-gray-100 px-2 py-1 rounded"
              >
                + Option
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.options?.map((opt: any) => (
                <span
                  key={opt.id}
                  className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {opt.name}
                  <button
                    onClick={() => deleteOption(opt.id)}
                    className="text-red-500"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
