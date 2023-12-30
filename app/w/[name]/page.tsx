'use client'

import { NextPage } from 'next';
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ITitle, ITitleEpisodesDub } from '@/../interfaces/ITitle';
import $api from '@/../components/http';
import { env } from '@/../config';
import Loading from '../../../components/Loading';
import { Instagram, Play, RatingStar, SupportBMC, SupportPatreon, SupportPrivatbank, Telegram, Tiktok, WatchPreference, Youtube } from '../../../assets/assets';
import BorderGradient, { WatchButton } from '../../../components/BorderGradient';
import Link from 'next/link';

import './styles.scss'
import localizeTitle, { getDubberById } from '@/../components/localizeTitle';
import { useAppSelector } from '../../../hooks/redux';
import { IDubber } from '../../../interfaces/IDubber';
import Player from '../../../components/Player';

const defaultDub: ITitleEpisodesDub = {
  eps: [
    {
      order: 1,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_0',
        'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_1',
        'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_2',
        'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_3',
        'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_4',
        'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_5',
        'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_6',
        'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_7',
        'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_8',
        'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_9',
        'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_10',
        'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb',
        q720: null,
        q480: 'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_q_480',
        q240: null
      }
    },
    {
      order: 2,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_0',
        'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_1',
        'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_2',
        'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_3',
        'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_4',
        'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_5',
        'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_6',
        'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_7',
        'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_8',
        'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_9',
        'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_10',
        'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0',
        q720: null,
        q480: 'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_q_480',
        q240: null
      }
    },
    {
      order: 3,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_0',
        'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_1',
        'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_2',
        'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_3',
        'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_4',
        'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_5',
        'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_6',
        'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_7',
        'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_8',
        'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_9',
        'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_10',
        'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4',
        q720: null,
        q480: 'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_q_480',
        q240: null
      }
    },
    {
      order: 4,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_0',
        'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_1',
        'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_2',
        'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_3',
        'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_4',
        'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_5',
        'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_6',
        'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_7',
        'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_8',
        'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_9',
        'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_10',
        'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628',
        q720: null,
        q480: 'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_q_480',
        q240: null
      }
    },
    {
      order: 5,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_0',
        'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_1',
        'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_2',
        'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_3',
        'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_4',
        'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_5',
        'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_6',
        'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_7',
        'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_8',
        'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_9',
        'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_10',
        'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96',
        q720: null,
        q480: 'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_q_480',
        q240: null
      }
    },
    {
      order: 6,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_0',
        'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_1',
        'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_2',
        'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_3',
        'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_4',
        'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_5',
        'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_6',
        'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_7',
        'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_8',
        'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_9',
        'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_10',
        'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7',
        q720: null,
        q480: 'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_q_480',
        q240: null
      }
    },
    {
      order: 7,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_0',
        'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_1',
        'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_2',
        'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_3',
        'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_4',
        'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_5',
        'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_6',
        'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_7',
        'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_8',
        'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_9',
        'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_10',
        'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb',
        q720: null,
        q480: 'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_q_480',
        q240: null
      }
    },
    {
      order: 8,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_0',
        'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_1',
        'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_2',
        'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_3',
        'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_4',
        'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_5',
        'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_6',
        'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_7',
        'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_8',
        'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_9',
        'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_10',
        'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4',
        q720: null,
        q480: 'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_q_480',
        q240: null
      }
    },
    {
      order: 9,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_0',
        'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_1',
        'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_2',
        'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_3',
        'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_4',
        'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_5',
        'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_6',
        'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_7',
        'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_8',
        'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_9',
        'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_10',
        'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9',
        q720: null,
        q480: 'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_q_480',
        q240: null
      }
    },
    {
      order: 10,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_0',
        'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_1',
        'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_2',
        'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_3',
        'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_4',
        'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_5',
        'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_6',
        'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_7',
        'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_8',
        'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_9',
        'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_10',
        'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04',
        q720: null,
        q480: 'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_q_480',
        q240: null
      }
    },
    {
      order: 11,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_0',
        'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_1',
        'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_2',
        'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_3',
        'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_4',
        'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_5',
        'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_6',
        'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_7',
        'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_8',
        'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_9',
        'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_10',
        'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122',
        q720: null,
        q480: 'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_q_480',
        q240: null
      }
    },
    {
      order: 12,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_0',
        'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_1',
        'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_2',
        'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_3',
        'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_4',
        'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_5',
        'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_6',
        'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_7',
        'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_8',
        'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_9',
        'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_10',
        'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f',
        q720: null,
        q480: 'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_q_480',
        q240: null
      }
    },
    {
      order: 13,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_0',
        'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_1',
        'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_2',
        'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_3',
        'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_4',
        'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_5',
        'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_6',
        'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_7',
        'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_8',
        'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_9',
        'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_10',
        'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb',
        q720: null,
        q480: 'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_q_480',
        q240: null
      }
    },
    {
      order: 14,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_0',
        'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_1',
        'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_2',
        'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_3',
        'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_4',
        'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_5',
        'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_6',
        'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_7',
        'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_8',
        'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_9',
        'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_10',
        'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da',
        q720: null,
        q480: 'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_q_480',
        q240: null
      }
    },
    {
      order: 15,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_0',
        'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_1',
        'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_2',
        'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_3',
        'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_4',
        'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_5',
        'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_6',
        'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_7',
        'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_8',
        'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_9',
        'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_10',
        'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d',
        q720: null,
        q480: 'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_q_480',
        q240: null
      }
    },
    {
      order: 16,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_0',
        'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_1',
        'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_2',
        'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_3',
        'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_4',
        'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_5',
        'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_6',
        'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_7',
        'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_8',
        'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_9',
        'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_10',
        'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef',
        q720: null,
        q480: 'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_q_480',
        q240: null
      }
    },
    {
      order: 17,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_0',
        'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_1',
        'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_2',
        'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_3',
        'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_4',
        'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_5',
        'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_6',
        'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_7',
        'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_8',
        'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_9',
        'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_10',
        'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1',
        q720: null,
        q480: 'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_q_480',
        q240: null
      }
    },
    {
      order: 18,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_0',
        'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_1',
        'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_2',
        'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_3',
        'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_4',
        'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_5',
        'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_6',
        'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_7',
        'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_8',
        'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_9',
        'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_10',
        'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea',
        q720: null,
        q480: 'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_q_480',
        q240: null
      }
    },
    {
      order: 19,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_0',
        'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_1',
        'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_2',
        'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_3',
        'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_4',
        'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_5',
        'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_6',
        'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_7',
        'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_8',
        'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_9',
        'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_10',
        'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246',
        q720: null,
        q480: 'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_q_480',
        q240: null
      }
    },
    {
      order: 20,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_0',
        'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_1',
        'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_2',
        'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_3',
        'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_4',
        'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_5',
        'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_6',
        'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_7',
        'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_8',
        'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_9',
        'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_10',
        'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f',
        q720: null,
        q480: 'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_q_480',
        q240: null
      }
    },
    {
      order: 21,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_0',
        'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_1',
        'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_2',
        'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_3',
        'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_4',
        'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_5',
        'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_6',
        'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_7',
        'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_8',
        'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_9',
        'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_10',
        'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7',
        q720: null,
        q480: 'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_q_480',
        q240: null
      }
    },
    {
      order: 22,
      subIDs: null,
      framesURL: [
        'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_0',
        'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_1',
        'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_2',
        'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_3',
        'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_4',
        'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_5',
        'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_6',
        'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_7',
        'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_8',
        'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_9',
        'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_10',
        'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_11'
      ],
      source: {
        q2k: null,
        q1080: 'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908',
        q720: null,
        q480: 'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_q_480',
        q240: null
      }
    }
  ],
  id: 'd979d465-1407-452f-8955-a7692480f9ac',
  include2K: false,
  includeSub: false
}

import SupportDiaka from '../../../assets/watch/supportDiaka.png'
import SupportMonobank from '../../../assets/watch/supportMonobank.png'
import NotFound from '@/oops/404/page';
import { AxiosError } from 'axios';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const TitleItem: NextPage = (props) => {
  const { name } = useParams<{ name: string }>()
  const [title, setTitle] = useState<ITitle>()
  const [titleNotFound, setTitleNotFound] = useState(false)
  const [totalEps, setTotalEps] = useState(0)
  const [selectedDub, setSelectedDub] = useState<ITitleEpisodesDub>(defaultDub)
  const [selectedDubber, setSelectedDubber] = useState<IDubber>()
  const { isAuth, roles, uid, username } = useAppSelector(state => state.user)

  useEffect(() => {
    (async function () {
      try {
        const res = await $api.get<ITitle>(`${env.apiUrl}/v1/title/${name}`);
        setTitle(localizeTitle(res.data!))

        let maxEps = 0
        res.data.dubs?.forEach(dub => {
          if (dub.eps.length > maxEps) maxEps = dub.eps.length;
        })

        setTotalEps(maxEps)
      } catch (e) {
        setTitleNotFound(true)
      }
    })()
  }, [])

  useEffect(() => {
    if (!title) return;

    let tmp: any = title!.details?.split('\n') || []
    if (title.country === 'null') {
      tmp.unshift('Тайтл не оновлений, тому інформація може бути неактуальна та/або неточна. Якщо ви вважаєте цей тайтл важливим, напишіть про це адміністрації.')
    }
    title!.details = tmp.join('\n');
  }, [title])

  useEffect(() => {
    (async function () {
      const res = await $api.get<IDubber>(`${env.apiUrl}/v1/dubber/${selectedDub.id}`)
      setSelectedDubber(res.data)
    })()
  }, [selectedDub])

  const currentDubHandler = (dub: ITitleEpisodesDub) => {
    setSelectedDub(dub)
  }

  return (
    <div className='w-screen min-h-screen h-full bg-dark'>
      {title ? <>
        <Header />
        <div className='h-screen w-full absolute top-0 left-0'>
          <div className='block w-full h-full absolute top-0 left-0 z-[2]' style={{ background: 'linear-gradient(180deg, rgba(18, 18, 18, 0.40) 0%, #121212 90.21%), linear-gradient(227deg, rgba(255, 242, 242, 0.03) 25.7%, rgba(255, 250, 250, 0.07) 94.73%)', backdropFilter: 'blur(35px)' }}></div>
          {/* Edit with blurhash */}
          <img src={title.background} loading='lazy' alt="..." className='w-full h-full' />
        </div>

        <div className="wrapper z-[3] gap-[40px] mb-[40px] max-[1140px]:flex-col max-[1140px]:items-center" id='title-about'>
          <img src={title.poster} loading='lazy' alt="..." className='h-full min-w-[380px] max-w-[500px] max-[545px]:w-full max-[545px]:min-w-[300px] rounded-[4px]' />

          <div className='flex flex-col justify-between gap-[24px] w-full'>
            <div className='flex flex-col gap-[24px]'>
              <div className='flex justify-between max-[500px]:gap-[16px] max-[500px]:items-center'>
                <div className='flex flex-col gap-[4px] w-full'>
                  <h2 className='text-white text-[40px] font-bold max-[600px]:text-[32px] max-[500px]:text-[24px]'>{title.names?.ukr || title.code}</h2>
                  <h3 className='text-[24px] font-extralight text-white max-[600px]:text-[16px]'>{title.names?.eng || title.code} {roles.includes('editor') ? `/ ${title.id}` : null}</h3>
                </div>

                <div className='flex gap-[8px] items-center'>
                  <RatingStar className='max-[500px]:opacity-0' />
                  <p className='gradient--primary-text text-[24px] font-bold'>{title.rating || '-'}</p>
                </div>
              </div>

              <p className='text-white text-[16px]'>{title.description}</p>

              <WatchButton href='#player' />

              {title.details ? <>
                <div className='px-[24px] py-[16px] rounded-[2px] border border-[#f39c12] bg-[#f1c40f]/[.1] flex flex-col gap-[16px]'>
                  {title.details.split('\n').map(detail => {
                    return <p className='text-white' key={detail}>{detail}</p>
                  })}
                </div>
              </> : null}

              <div className='flex flex-col gap-[24px]'>
                <h3 className='text-[32px] font-bold text-white max-[600px]:text-[24px]'>Про серіал</h3>

                <ul className='flex flex-col gap-[8px]'>
                  <li className='flex gap-[40px] max-[600px]:gap-[24px]'>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-extralight min-w-[110px]'>Статус:</p>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-normal'>{title.status}</p>
                  </li>
                  <li className='flex gap-[40px] max-[600px]:gap-[24px]'>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-extralight min-w-[110px]'>Епізоди:</p>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-normal'>{totalEps}/{title.estimatedEps}</p>
                  </li>
                  <li className='flex gap-[40px] max-[600px]:gap-[24px]'>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-extralight min-w-[110px]'>Жанри:</p>
                    <div className='flex flex-wrap gap-[8px]'>
                      {title.genres.map(genre => {
                        return <Link href={'#'} key={genre}>
                          {/* //! LINK FOR GENRE */}
                          <p className='text-white text-[24px] max-[600px]:text-[16px] font-bold'>{genre}</p>
                        </Link>
                      })}
                    </div>
                  </li>
                  <li className='flex gap-[40px] max-[600px]:gap-[24px]'>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-extralight min-w-[110px]'>Рейтинг:</p>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-bold gradient--primary-text'>{title.ageRate}</p>
                  </li>
                  <li className='flex gap-[40px] max-[600px]:gap-[24px]'>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-extralight min-w-[110px]'>Сезон:</p>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-normal'>{title.season}</p>
                  </li>
                  <li className='flex gap-[40px] max-[600px]:gap-[24px]'>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-extralight min-w-[110px]'>Тип:</p>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-normal'>{title.type}</p>
                  </li>
                  <li className='flex gap-[40px] max-[600px]:gap-[24px]'>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-extralight min-w-[110px]'>Студія:</p>
                    <div className='flex flex-wrap gap-[8px]'>
                      {title.studios.map(studio => {
                        return <Link href={'#'} key={studio}>
                          {/* //! LINK FOR STUDIO */}
                          <p className='text-white text-[24px] max-[600px]:text-[16px] font-bold'>{studio}</p>
                        </Link>
                      })}
                    </div>
                  </li>
                  <li className='flex gap-[40px] max-[600px]:gap-[24px]'>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-extralight min-w-[110px]'>Країна:</p>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-normal'>{title.country === 'null' ? 'Країне ще не оновлена 😥' : title.country}</p>
                  </li>
                  <li className='flex gap-[40px] max-[600px]:gap-[24px]'>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-extralight min-w-[110px]'>Озвучка:</p>
                    <div className='flex flex-wrap gap-[8px]'>
                      {title.dubs?.length ? title.dubs?.map(dub => {
                        return <Link href={'#'} key={dub.id}>
                          {/* //! LINK FOR DUBBER */}
                          {/* @ts-ignore */}
                          <p className='text-white text-[24px] max-[600px]:text-[16px] font-bold'>{dub.name}</p>
                        </Link>
                      }) : <p className='text-white text-[24px] max-[600px]:text-[16px] font-normal'>Озвучки не додані 😥</p>}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-[100px] flex flex-col gap-[40px]'>
          <div className="wrapper gap-[40px] pb-[40px]">
            <div className='flex gap-[32px] items-start max-[1032px]:flex-col max-[1032px]:items-center'>
              {title.dubs!.some(el => el.eps.length !== 0) ? <>
                <div className='w-full h-[600px] bg-grey rounded-[2px] mb-[40px]'>
                  <Player dubs={title.dubs || []} currentDubHandler={currentDubHandler} estimatedEps={title.estimatedEps} titleId={title.id} />
                </div>

                <div className='bg-grey flex flex-col gap-[32px] rounded-[2px] px-[24px] py-[16px] max-[600px]:w-full'>
                  {selectedDub ? <>
                    <div className='flex justify-between items-center gap-[32px] max-[500px]:flex-col'>
                      <div className='block w-[128px] h-[128px] rounded-[2px] overflow-hidden flex-shrink-0'>
                        <img src={selectedDubber?.thumbURL} alt="..." loading='lazy' />
                      </div>

                      <div className='flex flex-col justify-center items-center px-[32px] w-full'>
                        <p className='text-white text-[24px] font-extralight whitespace-nowrap text-center'>Озвучили</p>
                        <p className='text-white text-[24px] font-bold text-center'>{selectedDubber?.name}</p>
                      </div>
                    </div>

                    <div className='flex justify-center gap-[32px]'>
                      <div className='flex items-center gap-[8px]'>
                        <RatingStar width={24} height={24} />
                        <p className="gradient--primary-text text-[24px] font-bold">{selectedDubber?.rating}</p>
                      </div>

                      <div className='flex items-center gap-[8px]'>
                        <WatchPreference width={24} height={24} />
                        <p className="gradient--primary-text text-[24px] font-bold">-</p>
                      </div>
                    </div>

                    {selectedDubber?.support.bymeacoffee || selectedDubber?.support.diaka || selectedDubber?.support.monobank || selectedDubber?.support.patreon || selectedDubber?.support.privatbank ? <>
                      <div className='flex items-center flex-col gap-[16px]'>
                        <h4 className='text-white text-[24px] font-extralight'>Дяка</h4>

                        <div className='flex gap-[8px] max-[600px]:gap-[16px] items-center'>
                          {selectedDubber?.support.bymeacoffee && <>
                            <Link href={selectedDubber.support!.bymeacoffee} target='_blank'>
                              <SupportBMC height={40} width={40} />
                            </Link>
                          </>}

                          {selectedDubber?.support.patreon && <>
                            <Link href={selectedDubber.support!.patreon} target='_blank'>
                              <SupportPatreon height={40} width={40} />
                            </Link>
                          </>}

                          {selectedDubber?.support.privatbank && <>
                            <Link href={selectedDubber.support!.privatbank} target='_blank'>
                              <SupportPrivatbank height={40} width={40} />
                            </Link>
                          </>}

                          {selectedDubber?.support.monobank && <>
                            <Link href={selectedDubber.support!.monobank} target='_blank'>
                              <img src={SupportMonobank.src} alt="monobank" loading='lazy' />
                            </Link>
                          </>}

                          {selectedDubber?.support.diaka && <>
                            <Link href={selectedDubber.support!.diaka} target='_blank'>
                              <img src={SupportDiaka.src} alt="diaka" loading='lazy' />
                            </Link>
                          </>}
                        </div>
                      </div>
                    </> : null}

                    {selectedDubber?.socials.instagram || selectedDubber?.socials.telegram || selectedDubber?.socials.tiktok || selectedDubber?.socials.youtube ? <>
                      <div className='flex items-center flex-col gap-[16px]'>
                        <h4 className='text-white text-[24px] font-extralight'>Мережі</h4>

                        <div className='flex gap-[8px] max-[600px]:gap-[16px] items-center'>
                          {selectedDubber?.socials.instagram && <>
                            <Link href={selectedDubber.socials!.instagram} target='_blank'>
                              <Instagram height={40} width={40} />
                            </Link>
                          </>}

                          {selectedDubber?.socials.telegram && <>
                            <Link href={selectedDubber.socials!.telegram} target='_blank'>
                              <Telegram height={40} width={40} />
                            </Link>
                          </>}

                          {selectedDubber?.socials.tiktok && <>
                            <Link href={selectedDubber.socials!.tiktok} target='_blank'>
                              <Tiktok height={40} width={40} />
                            </Link>
                          </>}

                          {selectedDubber?.socials.youtube && <>
                            <Link href={selectedDubber.socials!.youtube} target='_blank'>
                              <Youtube height={40} width={40} />
                            </Link>
                          </>}
                        </div>
                      </div>
                    </> : null}
                  </> : <>
                    <p className='text-[24px] text-white whitespace-nowrap font-extralight'>Озвучка не вибрана</p>
                  </>}
                </div>
              </> : <>
                <h3 className='text-[24px] text-white gradient--primary-text font-bold'>Нажаль, озвучок нема</h3>
              </>}
            </div>
          </div>
        </div>
      </> : titleNotFound ? <NotFound /> : <Loading />}

      <Footer />
    </div>
  );
}

export default TitleItem;