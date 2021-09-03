import { Disclosure } from '@headlessui/react';
import {BiChevronUp, BiChevronDown} from "react-icons/bi";

function PlaysFilter(props) {
  return (
    <Disclosure>
        {({ open }) => (
            <>
                <Disclosure.Button className="py-2 flex items-center gap-3">
                    { open ? <BiChevronUp/> : <BiChevronDown/> } 
                    <span className={ open ? "text-red-600" : "text-gray-600" } >
                        {props.title}
                    </span>
                   
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500">
                    <div className="flex item-center gap-3 flex-wrap">
                        {props.tags.map((tags) => (
                            <>
                                <div className="border-2 border-gray-200 px-3 py-2">
                                    <span className="text-red-600">
                                        {tags}
                                    </span>

                                </div>
                            </>
                        ))}

                    </div>
                </Disclosure.Panel>
            </>
        )
        }
    </Disclosure>
  );
};

export default PlaysFilter;
