import style from "@/app/ui/footer/footer.module.css";
export const Footer = () => {
  return (
    <footer className={"border-t border-[#2d363e] w-full px-16"}>
      <div className={"pt-[131px] pb-[123px]"}>
        <div className={`${style.footerGrid} grid gap-x-24 relative`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <p>© 2023-2024</p>
    </footer>
  );
};
