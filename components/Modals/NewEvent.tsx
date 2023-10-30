"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Template from "./Template";
import { Button } from "@/components/ui/button";
import { useModal } from "@/app/_providers/modal/provider";
import { nip19 } from "nostr-tools";
// import { useKeys } from "@/app/_providers/keysProvider";
import { useNDK } from "@/app/_providers/ndk";
import useCurrentUser from "@/lib/hooks/useCurrentUser";
import {
  HiChatBubbleLeftEllipsis,
  HiSquaresPlus,
  HiNewspaper,
  HiCalendarDays,
} from "react-icons/hi2";
import { RiCalendarEventFill } from "react-icons/ri";
import { formatCount } from "@/lib/utils";
import LoginModal from "./Login";
import CreateList from "./CreateList";
import ShortTextNoteModal from "./ShortTextNote";
import CreateCalendarEventModal from "./CreateCalendarEvent";
import CreateCalendarModal from "./CreateCalendar";
import TileIconButton from "../Buttons/TileIconButton";

export default function NewEventModal() {
  const modal = useModal();
  return (
    <Template title="Time to publish..." className="md:max-w-[400px]">
      <div className="center gap-3 ">
        <TileIconButton
          className="flex-1"
          label="Add Event"
          icon={(props) => <HiSquaresPlus {...props} />}
          onClick={() => {
            modal?.swap(<CreateCalendarEventModal />);
          }}
        />
        <TileIconButton
          className="flex-1"
          label="Create Calendar"
          icon={(props) => <RiCalendarEventFill {...props} />}
          onClick={() => {
            modal?.swap(<CreateCalendarModal />);
          }}
        />
      </div>
    </Template>
  );
}
