import Icon from "@/modules/common/icons";
import { AnimatePresence, motion } from "framer-motion";
import NameImput from "../../../common/input-name";
import MailInput from "../../../common/input-email";
import OutButton from "@/modules/common/outline-button";
import Button from "@/modules/common/button";
import { useInterfaceContext } from "@/lib/context/interface-context";

const ExtraFormAdd = () => {
  const { showSendForm, handleShowSendForm } = useInterfaceContext();

  return (
    <>
      <AnimatePresence>
        {showSendForm && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className="z-20 w-full sm:w-2/5 absolute h-full bg-white right-0 border-l border-neutral-300"
          >
            <div className="flex items-end justify-between border-b border-neutral-300 w-full">
              <div className="flex items-end justify-between w-full py-5 px-8">
                <h2 className="font-semibold text-xl">
                  Send Extra Request Form (2)
                </h2>
                <button onClick={() => handleShowSendForm()}>
                  <Icon svg="/icons/Close.svg" />
                </button>
              </div>
            </div>
            <form className="flex flex-col gap-5 py-5 px-8 text-sm">
              <NameImput showIcon={true} />
              <MailInput />
              <hr className="border border-neutral-200 w-full" />
              <NameImput showIcon={true} />
              <MailInput />
              <hr className="border border-neutral-200 w-full" />
              <div>
                <OutButton
                  text="Add Another"
                  icon={<Icon svg="/icons/AddCircle.svg" />}
                  props={
                    "text-xs font-semibold w-full sm:w-fit items-center justify-center"
                  }
                />
              </div>
              <hr className="border border-neutral-200 w-full" />
              <div className="flex sm:justify-end w-full sm:w-fit">
                <Button text="Send Form" props={"w-full sm:w-fit"} />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExtraFormAdd;
