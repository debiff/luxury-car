import { epilogue, inconsolata, sora } from "@/app/ui/fonts";
import Image from "next/image";
import Counter from "@/app/about-us/components/Counter";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-white pb-[40px]">
      <section
        className={`${epilogue.className} flex flex-col md:flex-row pt-[95px] md:pt-[80px] pl-12 md:pl-32 justify-between `}
      >
        <div className={"md:w-1/2"}>
          <h2>Our Mission</h2>
          <p className={"mt-[26px]"}>
            Praesent elementum facilisis leo vel fringilla est. Vestibulum
            lectus a mauris ultrices eros in cursus.
          </p>
          <p className={"mt-[26px]"}>
            Praesent elementum facilisis leo vel fringilla est. Vestibulum
            lectus a mauris ultrices eros in cursus.
          </p>
        </div>

        <Image src={"/about-us/1.webp"} alt={"us"} width={500} height={537} />
      </section>
      <section
        className={`${epilogue.className} flex flex-col md:flex-row pl-8 md:pl-0 pr-4 md:px-16 justify-between bg-[#F5F2E9]`}
      >
        <Image src={"/about-us/1.webp"} alt={"us"} width={500} height={537} />
        <div
          className={
            "flex flex-col flex-grow justify-center items-center mb-[3px] text-left"
          }
        >
          <div className={"pl-[14.5%] pr-[27%]"}>
            <div>
              <h2>For Your Every Need</h2>
              <span
                className={`${inconsolata.className} text-[14px] tracking-[.25em] text-left text-[#bfa37c]`}
              >
                ONLY THE BEST
              </span>
            </div>
            <p className={"mt-[26px]"}>
              Praesent elementum facilisis leo vel fringilla est. Vest bulum
              lectus a urise ultrices eros in cursus.
            </p>
            <div className={"pt-[24px] flex"}>
              <div className={"flex flex-col md:pr-16"}>
                <div className={"flex"}>
                  <Counter
                    from={0}
                    to={11}
                    className={
                      "text-[#0c1315] text-[85px] tracking-[.03em] leading-[1]"
                    }
                  />
                  <span className="b-[5px] relative text-[55px]">+</span>
                </div>
                <p
                  className={`${sora.className} mt-[11px] text-[16px] leading-[1.75] text-[#404040] font-normal tracking-[.03em] ml-[5px]`}
                >
                  Years of experience
                </p>
              </div>
              <div className={"flex flex-col"}>
                <div className={"flex items-end"}>
                  <Counter
                    from={0}
                    to={5}
                    className={
                      "text-[#0c1315] text-[85px] tracking-[.03em] leading-[1]"
                    }
                  />
                  <span className="bottom-[21px] relative text-[55px]">k</span>
                </div>
                <p
                  className={`${sora.className} mt-[11px] text-[16px] leading-[1.75] text-[#404040] font-normal tracking-[.03em] ml-[5px]`}
                >
                  Satisfied clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${epilogue.className} flex flex-col md:flex-row pt-[95px] md:pt-[80px] pl-8 pr-4 md:px-16 justify-center`}
      >
        <div className={"md:w-1/2"}>
          <h2>
            We value our clients and want them to have the best experience
          </h2>
          <div className={"pt-7"}>
            <div className={"flex flex-row justify-between pb-8"}>
              <div className={"w-1/2 mr-4"}>
                <h5>Clean & Comfortable</h5>
                <p className={"mt-[9px]"}>
                  {`Our cars are always clean and comfortable. 
                  We take care of
                    your comfort and safety.
                  `}
                </p>
              </div>
              <div className={"w-1/2"}>
                <h5>Best Price Is Assured</h5>
                <p className={"mt-[9px]"}>
                  We guarantee the best price for our services. We will match
                  the price if you find cheaper.
                </p>
              </div>
            </div>
            <div className={"flex flex-row justify-between"}>
              <div className={"w-1/2 pr-4"}>
                <h5>Smooth Car Transport</h5>
                <p className={"mt-[9px]"}>
                  We provide a smooth car transport service. We will take you to
                  your destination safely and on time.
                </p>
              </div>
              <div className={"w-1/2"}>
                <h5>Premium Selection</h5>
                <p className={"mt-[9px]"}>
                  We offer a premium selection of cars. You can choose the car
                  that suits your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TODO: Add newsletter subscription */}
      {/*<section*/}
      {/*  className={`${epilogue.className} flex flex-col md:flex-row pl-8 md:pl-0 pr-4 md:px-16 justify-between bg-[#F5F2E9]`}*/}
      {/*></section>*/}
    </main>
  );
};

export default Page;
