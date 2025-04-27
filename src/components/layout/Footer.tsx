export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-300">
      <p className="text-center text-sm/relaxed text-gray-500">
        © Second Mind 2025 . Todos os direitos reservados.
        <br />
        Feito pelo
        <a
          target="_blank"
          href="https://github.com/andreeeestor"
          className="text-gray-700 underline transition hover:text-gray-700/75 px-1"
        >
          André Nestor
        </a>
        usando
        <a
          href="#"
          className="text-gray-700 underline transition hover:text-gray-700/75 pl-1"
        >
          ReactJS
        </a>
        .
      </p>
    </footer>
  );
}
