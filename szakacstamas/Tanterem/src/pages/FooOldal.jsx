import KurzusLista from "../components/program/KurzusLista";

const kurzusok = [
  { id: 1, cim: "Programozás 13.C", tanar: "Dr. Deszka Dávid", szerep: "student" },
  { id: 2, cim: "Matematika 13.C", tanar: "Kovács Mária", szerep: "student" },
];

export default function FooOldal() {
  return (
    <div>
      <KurzusLista kurzusok={kurzusok} userRole="teacher" />
    </div>
  );
}