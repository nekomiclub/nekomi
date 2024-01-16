'use client'

import { NextPage } from 'next';
import { usePathname } from 'next/navigation';
import { useEffect, useState, MouseEvent, useRef, useCallback } from 'react'
import { OopsServerUnavailable, Play, PlayerDubsList, PlayerNext } from '../assets/assets';
import { ITitleEpisodeDubbed, ITitleEpisodesDub } from '../interfaces/ITitle';
import $api from './http';
import { IDubber } from '../interfaces/IDubber';
import { devMode, env } from '../config';
import { useIdleTimer } from 'react-idle-timer'
import { Range } from 'react-range'

import '../styles/components/Player.scss'
import { PlayerEnterFS, PlayerExitFS, PlayerPIP, PlayerPause, PlayerQuality, PlayerSettings, PlayerSettingsPrev, PlayerSpeed, PlayerSubtitles, PlayerVolume, PlayerVolumeHight, PlayerVolumeLow, PlayerVolumeMuted, PlayerWatch } from '../assets/watch';
import axios from 'axios';
import { IStatRecord } from '../interfaces/IStat';

// const defaultDub: ITitleEpisodesDub = {
//   eps: [
//     {
//       order: 1,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_0',
//         'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_1',
//         'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_2',
//         'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_3',
//         'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_4',
//         'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_5',
//         'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_6',
//         'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_7',
//         'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_8',
//         'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_9',
//         'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_10',
//         'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/aa193dfc-5bb7-4379-bf33-25a255001adb_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 2,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_0',
//         'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_1',
//         'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_2',
//         'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_3',
//         'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_4',
//         'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_5',
//         'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_6',
//         'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_7',
//         'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_8',
//         'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_9',
//         'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_10',
//         'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/93551b8e-2128-404e-b86e-3f611214a8d0_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 3,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_0',
//         'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_1',
//         'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_2',
//         'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_3',
//         'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_4',
//         'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_5',
//         'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_6',
//         'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_7',
//         'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_8',
//         'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_9',
//         'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_10',
//         'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/dafd9680-6476-46b3-98ca-ca53af79f5c4_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 4,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_0',
//         'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_1',
//         'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_2',
//         'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_3',
//         'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_4',
//         'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_5',
//         'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_6',
//         'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_7',
//         'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_8',
//         'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_9',
//         'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_10',
//         'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/7a949e9d-ac54-45ae-9308-dac64ff63628_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 5,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_0',
//         'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_1',
//         'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_2',
//         'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_3',
//         'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_4',
//         'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_5',
//         'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_6',
//         'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_7',
//         'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_8',
//         'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_9',
//         'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_10',
//         'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/81ea5c8a-f37f-40bb-a39e-b44da8adcb96_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 6,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_0',
//         'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_1',
//         'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_2',
//         'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_3',
//         'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_4',
//         'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_5',
//         'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_6',
//         'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_7',
//         'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_8',
//         'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_9',
//         'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_10',
//         'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/d4b647ed-50dd-44c0-addb-08dd4b6293d7_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 7,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_0',
//         'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_1',
//         'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_2',
//         'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_3',
//         'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_4',
//         'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_5',
//         'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_6',
//         'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_7',
//         'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_8',
//         'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_9',
//         'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_10',
//         'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/0db58c3b-f617-42b9-9e17-7d3d692039bb_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 8,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_0',
//         'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_1',
//         'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_2',
//         'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_3',
//         'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_4',
//         'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_5',
//         'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_6',
//         'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_7',
//         'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_8',
//         'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_9',
//         'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_10',
//         'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/55d2d37e-00ed-4f91-aabf-a24e61d0e4f4_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 9,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_0',
//         'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_1',
//         'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_2',
//         'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_3',
//         'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_4',
//         'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_5',
//         'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_6',
//         'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_7',
//         'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_8',
//         'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_9',
//         'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_10',
//         'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/f91c7373-c673-48ef-b45e-6512ade011e9_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 10,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_0',
//         'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_1',
//         'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_2',
//         'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_3',
//         'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_4',
//         'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_5',
//         'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_6',
//         'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_7',
//         'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_8',
//         'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_9',
//         'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_10',
//         'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/a6941a71-c6a6-4030-99dd-3c17d94f9f04_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 11,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_0',
//         'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_1',
//         'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_2',
//         'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_3',
//         'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_4',
//         'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_5',
//         'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_6',
//         'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_7',
//         'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_8',
//         'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_9',
//         'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_10',
//         'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/cedbba7b-20d6-431a-bd4c-8004357e1122_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 12,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_0',
//         'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_1',
//         'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_2',
//         'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_3',
//         'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_4',
//         'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_5',
//         'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_6',
//         'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_7',
//         'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_8',
//         'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_9',
//         'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_10',
//         'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/7f107f33-d2df-44e9-992f-e70b781d8e0f_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 13,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_0',
//         'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_1',
//         'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_2',
//         'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_3',
//         'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_4',
//         'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_5',
//         'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_6',
//         'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_7',
//         'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_8',
//         'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_9',
//         'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_10',
//         'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/009a93cb-4add-41c0-bfa6-8178dfa8a4bb_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 14,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_0',
//         'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_1',
//         'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_2',
//         'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_3',
//         'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_4',
//         'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_5',
//         'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_6',
//         'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_7',
//         'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_8',
//         'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_9',
//         'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_10',
//         'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/110fd3a5-1945-4dea-b13b-fc286e44d5da_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 15,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_0',
//         'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_1',
//         'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_2',
//         'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_3',
//         'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_4',
//         'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_5',
//         'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_6',
//         'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_7',
//         'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_8',
//         'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_9',
//         'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_10',
//         'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/189251ab-9612-4a13-9ad9-3d7c2906c09d_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 16,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_0',
//         'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_1',
//         'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_2',
//         'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_3',
//         'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_4',
//         'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_5',
//         'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_6',
//         'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_7',
//         'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_8',
//         'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_9',
//         'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_10',
//         'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/abf74dea-27ab-46e0-a556-4dcd82af28ef_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 17,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_0',
//         'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_1',
//         'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_2',
//         'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_3',
//         'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_4',
//         'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_5',
//         'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_6',
//         'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_7',
//         'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_8',
//         'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_9',
//         'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_10',
//         'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/8e8fc417-01b0-49e0-9255-2b8d116e7ef1_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 18,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_0',
//         'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_1',
//         'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_2',
//         'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_3',
//         'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_4',
//         'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_5',
//         'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_6',
//         'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_7',
//         'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_8',
//         'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_9',
//         'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_10',
//         'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/047c4e05-0d3f-4dd5-8f70-82faf1f886ea_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 19,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_0',
//         'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_1',
//         'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_2',
//         'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_3',
//         'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_4',
//         'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_5',
//         'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_6',
//         'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_7',
//         'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_8',
//         'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_9',
//         'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_10',
//         'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/21589da7-1b4d-4be1-a797-7489ce124246_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 20,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_0',
//         'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_1',
//         'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_2',
//         'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_3',
//         'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_4',
//         'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_5',
//         'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_6',
//         'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_7',
//         'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_8',
//         'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_9',
//         'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_10',
//         'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/3587bf2c-6894-4724-9579-a67a50ab321f_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 21,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_0',
//         'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_1',
//         'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_2',
//         'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_3',
//         'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_4',
//         'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_5',
//         'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_6',
//         'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_7',
//         'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_8',
//         'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_9',
//         'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_10',
//         'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/64cc4257-8733-49f3-93fc-efe80e5c9bf7_q_480',
//         q240: null
//       }
//     },
//     {
//       order: 22,
//       subIDs: null,
//       framesURL: [
//         'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_0',
//         'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_1',
//         'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_2',
//         'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_3',
//         'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_4',
//         'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_5',
//         'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_6',
//         'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_7',
//         'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_8',
//         'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_9',
//         'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_10',
//         'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_f_11'
//       ],
//       source: {
//         q2k: null,
//         q1080: 'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908',
//         q720: null,
//         q480: 'https://api.animee.club/v1/media/40c1df8c-0ae7-48d5-b759-8e708f750908_q_480',
//         q240: null
//       }
//     }
//   ],
//   id: 'd979d465-1407-452f-8955-a7692480f9ac',
//   include2K: true,
//   includeSub: true
// }

interface IPlayerLocalData {
  id: string,
  dub: string,
  ep: number,
  moment: number,
}

interface IPlayerSessionData {
  volume: number,
  speed: number
}

let previewShownTimeout;
let isUnloadStatSended = false;
const Player: NextPage<{ dubs: ITitleEpisodesDub[], estimatedEps: number, currentDubHandler: (dub: ITitleEpisodesDub) => void, titleId: string }> = ({ dubs, currentDubHandler, estimatedEps, titleId }) => {
  const pathname = usePathname()

  const [playerStarted, setPlayerStarted] = useState(false)
  const [isDubListOpened, setIsDubListOpened] = useState(false)
  const [idToDubber, setIdToDubber] = useState<{ id: string, name: string }[]>([])
  const [currentDub, setCurrentDub] = useState<ITitleEpisodesDub>(dubs[0])
  const [currentDubber, setCurrentDubber] = useState<IDubber>()
  const [currentEp, setCurrentEp] = useState(1)
  const [isNextEpDisabled, setIsNextEpDusabled] = useState(false)

  const [isPlayerSettingsOpen, setIsPlayerSettingsOpen] = useState(false)
  const [isDataLoadedFromLS, setIsDataLoadedFromLS] = useState(false)
  const [settingsPage, setSettingsPage] = useState<'general' | 'qualities' | 'subs' | 'speed' | 'volume'>('general')

  const playerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const preloadRef = useRef<HTMLDivElement>(null)

  const durationRangePreviewRef = useRef<HTMLDivElement>(null)

  const volumeRef = useRef<HTMLDivElement>(null)
  const watchedSRef = useRef(0);
  const watchedInterval = useRef<any>();

  const [playerSize, setPlayerSize] = useState([800, 800])
  const [videoDuration, setVideoDuration] = useState(0)
  const [videoProcessed, setVideoProcessed] = useState(false)

  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const [playerVolume, setPlayerVolume] = useState(50)
  const [playerVolumePreMuted, setPlayerVolumePreMuted] = useState<number | null>()
  const [playerMoment, setPlayerMoment] = useState([0])
  const [playerQuality, setPlayerQuality] = useState<'q2k' | 'q1080' | 'q720' | 'q480' | 'q240'>('q1080')
  const [isPlayerIdle, setIsPlayerIdle] = useState(false)

  const [subtitles, setSubtitles] = useState<'відсутні'>('відсутні')
  const [speed, setSpeed] = useState<number>(1)

  useIdleTimer({
    onIdle: () => {
      setIsPlayerIdle(true)
    },
    onAction: () => setIsPlayerIdle(false),
    timeout: 5000,
    throttle: 500
  })

  useEffect(() => {
    (async function () {
      // const localData = JSON.parse(localStorage.getItem('playerData') || '[]') as IPlayerLocalData[];

      const res = await $api.get<IDubber>(`${env.apiUrl}/v1/dubber/${currentDub!.id}`)
      setCurrentDubber(res.data!)

      dubs.forEach(async dub => {
        const res = await $api.get<IDubber>(`${env.apiUrl}/v1/dubber/${dub.id}`)
        setIdToDubber(idDubbers => {
          return [...idDubbers.filter(el => el.id !== res.data.id), { id: res.data.id, name: res.data.name }]
        })
      })
    })();

    playerRef.current?.addEventListener('fullscreenchange', () => {
      setIsFullscreen(Boolean(document.fullscreenElement))
    })

    window.addEventListener('resize', e => {
      setPlayerSize([playerRef.current?.offsetWidth!, playerRef.current?.offsetHeight!])
    })

    videoRef.current?.addEventListener('play', () => setIsPaused(false))
    videoRef.current?.addEventListener('pause', () => setIsPaused(true))

    const video = videoRef.current;
    const player = playerRef.current;

    if (video && player) {
      video.addEventListener('loadedmetadata', () => {
        setVideoDuration(video.duration)
      })


      video.addEventListener('timeupdate', e => {
        setPlayerMoment([video.currentTime])
      })
    }

    const lsData = getLSData();

    if (lsData) {
      setCurrentEp(lsData.ep)
      changeDub(dubs.find(el => el.id === lsData.dub)!)
    }

    return () => {
      if (!isUnloadStatSended) {
        isUnloadStatSended = true;
        return;
      }

      sendStat();
      clearInterval(watchedInterval.current)
    }
  }, [])

  useEffect(() => {
    if (!currentDub) return

    (async function () {
      const res = await $api.get<IDubber>(`${env.apiUrl}/v1/dubber/${currentDub.id}`)
      setCurrentDubber(res.data!)
    })()

    videoRef.current!.currentTime = playerMoment[0];
    currentDubHandler(currentDub)
  }, [currentDub])

  useEffect(() => {
    const video = videoRef.current!;

    if (isPaused) {
      video.pause()
      setPlayerMoment([video.currentTime])
      clearInterval(watchedInterval!.current)
    } else {
      video.play()
      setPlayerMoment([video.currentTime])
      watchedInterval!.current = setInterval(() => {
        watchedSRef.current++
      }, 1000)
    }
  }, [isPaused])

  // Hide cursor if player (page) idle
  useEffect(() => {
    if (isPlayerIdle) {
      playerRef.current!.style.cursor = 'none'
    } else {
      playerRef.current!.style.cursor = 'default'
    }
  }, [isPlayerIdle])

  // Pause and start at the beginning //! In dev mode not check if video reassembled
  useEffect(() => {
    setIsPaused(true);

    const lsData = getLSData();

    if (lsData && lsData.dub === currentDub.id && lsData.ep === currentEp) {
      changeMoment([lsData.moment])
      setIsDataLoadedFromLS(true)
    } else {
      changeMoment([0])
    }

    if (isDataLoadedFromLS) {
      writeLSData({});
    }

    if (!devMode) axios.get(currentDub.eps.find(el => el.order === currentEp)!.framesURL![0]).then(() => setVideoProcessed(true)).catch(e => setVideoProcessed(false))
  }, [currentEp, currentDub])

  // Change progress width according to moment
  useEffect(() => {
    if (!progressRef.current) return

    progressRef.current!.style.width = `${(playerMoment[0] / videoDuration * 100).toFixed(2)}%`
  }, [playerMoment])

  const handleKeyboard = useCallback((e) => {
    const video = videoRef.current;
    const player = playerRef.current;

    if (!video || !player) {
      return
    }

    const volumeUp = () => {
      setPlayerVolume(prev => {
        if (prev + 2 <= 100) {
          return prev += 2;
        } else if (prev + 1 <= 100) {
          return prev += 1;
        } else {
          return prev;
        }
      })
    }

    const volumeDown = () => {
      setPlayerVolume(prev => {
        if (prev - 2 >= 0) {
          return prev -= 2;
        } else if (prev - 1 >= 0) {
          return prev -= 1;
        } else {
          return prev;
        }
      })
    }

    if (e.deltaY) {
      if (playerRef.current.querySelector('#dubs-list')?.classList.contains('opacity-100')) return
      if (!document.fullscreenElement) return;

      if (e.deltaY === 100) {
        volumeDown()
      } else if (e.deltaY === -100) {
        volumeUp()
      }

      return
    }

    const key = e.code as 'KeyL' | 'KeyK' | 'KeyJ' | 'Space' | 'ArrowRight' | 'ArrowLeft' | 'ArrowUp' | 'ArrowDown' | 'KeyF'

    if (key === 'Space' || key === 'KeyK') {
      setIsPaused(is => !is)
    }

    if (key === 'KeyF') {
      changeFullscreen()
    }

    switch (key) {
      case 'KeyJ': {
        changeMoment([video.currentTime - 10])
        break;
      }

      case 'KeyL': {
        changeMoment([video.currentTime + 10])
        break;
      }

      case 'ArrowLeft': {
        changeMoment([video.currentTime - 5])
        break;
      }

      case 'ArrowRight': {
        changeMoment([video.currentTime + 5])
        break;
      }

      case 'ArrowUp': {
        volumeUp()
        break;
      }

      case 'ArrowDown': {
        volumeDown()
        break;
      }
    }
  }, [])

  // Handle keyboard
  useEffect(() => {
    const video = videoRef.current;
    const player = playerRef.current;

    if (!video || !player) {
      return
    }

    player.addEventListener('keydown', handleKeyboard)
    player.addEventListener('wheel', handleKeyboard)
    return () => player.removeEventListener('keydown', handleKeyboard)
  }, [handleKeyboard])

  // Change volume & volume pregress refs width
  useEffect(() => {
    if (volumeRef.current) {
      volumeRef.current.style.width = `${(playerVolume).toFixed(2)}%`;
    }


    videoRef.current!.volume = playerVolume / 100;
  }, [playerVolume])

  // Change speed & speed pregress ref width
  useEffect(() => {
    videoRef.current!.playbackRate = speed;
  }, [speed])

  // Move range previews while hovering
  useEffect(() => {
    if (!videoDuration) return;

    const durationRange = document.querySelector('#player-duration') as HTMLDivElement
    const durationRangePreview = document.querySelector('#player-duration--preview') as HTMLDivElement

    // Set default preview
    setPreview(0, durationRangePreview.querySelector('img')!)

    if (durationRange && durationRangePreview) {
      durationRange.addEventListener('pointermove', e => {
        const x = Math.floor(e.offsetX);
        const width = (e.target! as HTMLDivElement).offsetWidth;
        const secs = Math.floor(x / width * videoDuration);

        durationRangePreview.style.opacity = '100';
        durationRangePreview.style.visibility = 'visible';

        moveRangePreview(secs)
        setPreview(secs, durationRangePreview.querySelector('img')!)
      })

      durationRange.addEventListener('pointerleave', () => {
        durationRangePreview.style.opacity = '0';
        durationRangePreview.style.visibility = 'hidden';
      })
    }
  }, [videoDuration])

  useEffect(() => {
    videoRef.current!.currentTime = playerMoment[0];
  }, [playerQuality])



  // Move range preview
  function moveRangePreview(secs: number) {
    const durationRange = document.querySelector('#player-duration') as HTMLDivElement
    const durationRangePreview = document.querySelector('#player-duration--preview') as HTMLDivElement

    if (!durationRange || !durationRangePreview) return

    const width = durationRange.offsetWidth;
    const offset = Math.floor(secs / videoDuration * width)
    const halfPreviewWidth = durationRangePreview.offsetWidth / 2;
    const breakpoints = {
      left: halfPreviewWidth,
      right: width - halfPreviewWidth
    }

    if (offset < breakpoints.left) {
      // Left breakpoint
      durationRangePreview.style.left = `0px`;
      durationRangePreview.style.transform = `translateX(0px)`;
    } else if (offset > breakpoints.right) {
      // Right breakpoint
      durationRangePreview.style.right = `0px`;
    } else {
      // No breakpoints
      durationRangePreview.style.transform = `translateX(${offset}px)`;
      durationRangePreview.style.left = `-80px`;
    }

    durationRangePreview.querySelector('p')!.innerText = getHrsMinsSecs(secs).pretty
  }

  function setPreview(moment: number, img: HTMLImageElement) {
    if (!img) return;

    const frames = currentDub.eps.find(el => el.order === currentEp)!.framesURL!
    const momentIndex = Math.floor(Math.floor(moment / 5) / 25);
    const momentFrame = frames[momentIndex];

    const imgWidth = img.offsetWidth;
    const momentOffset = momentIndex * (imgWidth * 25); // img width * 25

    img.setAttribute('src', momentFrame)
    img.style.objectPosition = `-${Math.floor(Math.floor(moment / 5) * imgWidth) - momentOffset}px` // math.floor / img width
  }

  const startPlayer = () => {
    setPlayerStarted(true)
  }

  const changeFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(e => console.error(e)).then(() => setIsFullscreen(false))
    } else {
      playerRef.current?.requestFullscreen().catch(e => console.error(e)).then(() => setIsFullscreen(true))
    }
  }

  const changePIP = () => {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture().catch(e => console.error(e))
    } else {
      videoRef.current?.requestPictureInPicture().catch(e => console.error(e))
    }
  }

  const changeDubsList = () => {
    setIsDubListOpened(!isDubListOpened)
  }

  function changeDub(dub: ITitleEpisodesDub) {
    setCurrentDub(dub)

    sendStat();

    let maxEp = 0;

    dub.eps.forEach(ep => {
      if (ep.order > maxEp) maxEp = ep.order;
    })

    if (currentEp > maxEp) {
      setIsNextEpDusabled(true)
      setCurrentEp(maxEp)
    } else {
      setIsNextEpDusabled(false)
    }
  }

  const nextEpisode = (ep?: number) => {
    let maxEp = 0;
    let nextEp = ep || currentEp;
    nextEp++;

    sendStat();

    currentDub.eps.forEach(ep => {
      if (ep.order > maxEp) maxEp = ep.order;
    })

    if (nextEp > maxEp) {
      setIsNextEpDusabled(true)

      if (ep) setCurrentEp(ep)
      return;
    } else {
      setIsNextEpDusabled(false)
      setCurrentEp(ep => {
        return ++ep;
      });

      if (ep) {
        return setCurrentEp(ep);
      }

      if (nextEp + 1 > maxEp) {
        setIsNextEpDusabled(true)
        return;
      }

      return;
    }
  }

  function changeMoment(values: number[]) {
    const video = videoRef.current!;
    setPlayerMoment(values)
    video.currentTime = values[0];

    clearTimeout(previewShownTimeout);

    const durationRange = document.querySelector('#player-duration') as HTMLDivElement
    const durationRangePreview = document.querySelector('#player-duration--preview') as HTMLDivElement

    if (!durationRange || !durationRangePreview) return

    durationRangePreview.style.opacity = '100';
    durationRangePreview.style.visibility = 'visible';

    moveRangePreview(values[0])
    setPreview(values[0], durationRangePreview.querySelector('img')!)

    previewShownTimeout = setTimeout(() => {
      durationRangePreview.style.opacity = '0';
      durationRangePreview.style.visibility = 'hidden';
    }, 1000);

    writeLSData({ moment: values[0] })
  }

  const getHrsMinsSecs = (time: number): { hrs: number, mins: number, secs: number, pretty: string } => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time - mins * 60);
    const hrs = Math.floor(time / 3600);
    const pretty = `${hrs ? hrs < 10 ? `0${hrs}:` : `${hrs}:` : ''}${mins < 10 ? `0${mins}:` : `${mins}:`}${secs < 10 ? `0${secs}` : secs}`

    return { hrs, mins, secs, pretty }
  }

  const muteVideo = () => {
    const video = videoRef.current!

    // if volume not null
    if (playerVolumePreMuted) {
      setPlayerVolume(playerVolumePreMuted)
      setPlayerVolumePreMuted(null)
      video.muted = false
    } else {
      setPlayerVolumePreMuted(playerVolume)
      setPlayerVolume(0)
      video.muted = true
    }
  }

  const changeQuality = (quality: 'q2k' | 'q1080' | 'q720' | 'q480' | 'q240') => {
    setPlayerQuality(quality)
  }

  function writeLSData({ dub, ep, moment }: { dub?: string, ep?: number, moment?: number }) {
    const data = JSON.parse(localStorage.getItem('kekwplayer_data') || '[]') as IPlayerLocalData[];
    let newData: IPlayerLocalData[] = []

    if (data) {
      newData = data.filter(el => el.id !== titleId);
    }

    newData.push({
      id: titleId,
      dub: dub || currentDub.id,
      ep: ep || currentEp,
      moment: moment || playerMoment[0]
    })

    localStorage.setItem('kekwplayer_data', JSON.stringify(newData))
  }

  function getLSData(): IPlayerLocalData | null {
    const data = JSON.parse(localStorage.getItem('kekwplayer_data') || '[]') as IPlayerLocalData[];
    return data.find(el => el.id === titleId) || null;
  }

  function sendStat() {
    const req: IStatRecord = {
      selectedDub: currentDub.id,
      title: titleId,
      watchtime: watchedSRef.current
    }

    watchedSRef.current = 0;

    // Skip error (401)
    $api.post(`${env.apiUrl}/v1/stat/record`, req).catch(e => null)
  }

  return (
    <div id="player" className='w-full h-full relative bg-black' ref={playerRef} tabIndex={0}>

      {/* Player preview */}
      <div id="player-start" className={`w-full h-full absolute top-0 left-0 bg-grey flex justify-center items-center cursor-pointer duration-200 z-[100] ${playerStarted ? 'opacity-0 invisible' : null}`} onClick={() => startPlayer()}>
        <Play width={230} height={280} />
      </div>

      <div id="player-layout" className='w-full h-full relative top-0 left-0'>
        <div className='absolute top-0 left-0 w-full h-full z-[30]' onClick={() => setIsPaused(!isPaused)}></div>

        <div id="player-layout--top" className={`absolute left-[60px] top-[24px] flex gap-[8px] items-stretch duration-300 z-[31] ${isPlayerIdle ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
          <button className='px-[16px] bg-dark rounded-[4px] relative' onClick={() => changeDubsList()}>
            <PlayerDubsList width={32} height={40} />
          </button>

          <div className='bg-dark px-[12px] py-[8px] flex flex-col gap-[2px] items-center rounded-[4px]'>
            <p className='text-[16px] text-white font-bold'>{currentEp}</p>
            <p className='text-[14px] text-white'>{currentDubber?.name}</p>
          </div>

          <button className={`px-[16px] bg-dark rounded-[4px] player-nextEp ${isNextEpDisabled ? 'player-nextEp--disabled' : ''}`} onClick={() => nextEpisode()}>
            <PlayerNext width={32} height={32} />
          </button>

          {/* Dubs select */}
          <div id='dubs-list' className={`absolute left-0 rounded-[2px] min-w-full w-fit bg-dark px-[6px] py-[4px] flex gap-[12px] duration-200 ${isDubListOpened ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{ top: 'calc(100% + 8px)' }}>
            <div className='flex flex-col gap-[4px] max-h-[150px] overflow-y-scroll player-scroll shrink-0'>
              {dubs.map(dub => {
                return <div key={dub.id} className={`py-[2px] px-[4px] rounded-[2px] cursor-pointer duration-100 hover:bg-white/[.2] flex items-center gap-[12px] ${currentDub.id === dub.id ? 'bg-white/[.2]' : ''}`} onClick={() => changeDub(dub)}>
                  <p className='text-white text-[16px] font-extralight whitespace-nowrap'>{idToDubber.find(el => el.id === dub.id)?.name}</p>

                  <div className='flex items-center gap-[4px]'>
                    <div className='bg-grey px-[4px] py-[2px] rounded-[2px]'>
                      <p className='text-white text-[12px] font-extralight'>{dub.eps.length}/{estimatedEps}</p>
                    </div>

                    {dub.include2K ? <>
                      <div className='gradient--primary px-[4px] py-[2px] rounded-[2px]'>
                        <p className='text-white text-[12px] font-extralight'>2K</p>
                      </div>
                    </> : null}

                    {dub.includeSub ? <>
                      <div className='gradient--primary px-[4px] py-[2px] rounded-[2px]'>
                        <p className='text-white text-[12px] font-extralight'>SUB</p>
                      </div>
                    </> : null}
                  </div>
                </div>
              })}
            </div>

            <span className='block w-[1px] bg-white/[.2] rounded-[2px]'></span>

            <div className='flex flex-col max-h-[150px] overflow-y-scroll player-scroll w-full'>
              {currentDub.eps.map(ep => {
                return <button key={ep.order} className={`py-[2px] px-[4px] rounded-[2px] duration-200 hover:bg-white/[.2] ${currentEp === ep.order ? 'bg-white/[.2]' : ''}`} onClick={() => nextEpisode(ep.order)}>
                  <p className='text-white'>{ep.order}</p>
                </button>
              })}
            </div>
          </div>
        </div>

        <div id="player-layout--bottom" className={`absolute bottom-0 w-full bg-dark/[.2] px-[60px] py-[24px] gap-[40px] flex justify-between  z-[31] items-center duration-300 ${isPlayerIdle ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
          {/* Play/Pause */}
          <button className='flex-shrink-0 w-[32px] h-[40px] relative' onClick={() => setIsPaused(!isPaused)}>
            <PlayerWatch width={32} height={40} className={`absolute top-0 left-0 duration-200 ${isPaused ? `opacity-100 visible` : `opacity-0 invisible`}`} />
            <PlayerPause width={32} height={40} className={`absolute top-0 left-0 duration-200 ${isPaused ? `opacity-0 invisible` : `opacity-100 visible`}`} />
          </button>

          {/* Duration range */}
          <div className='w-full max-w-[1360px] relative'>
            {videoDuration ? <>
              <Range
                step={1}
                min={0}
                max={videoDuration + 2}
                onChange={values => changeMoment(values)}
                values={[Math.round(playerMoment[0])]}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      zIndex: 33,
                      position: 'relative'
                    }}
                    className='w-full h-[5px] bg-white/[.2] rounded-[4px] duration-200 hover:h-[10px]'
                    id='player-duration'
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      touchAction: 'none',
                      pointerEvents: 'none',
                      zIndex: 33,
                      position: 'relative'
                    }}
                    className={`w-[16px] h-[16px] rounded-[128px] gradient--secondary z-[33]`}
                  />
                )}
              />

              <div ref={durationRangePreviewRef} id='player-duration--preview' className='absolute w-[160px] bg-dark rounded-[4px] bottom-[300%] left-0 overflow-hidden opacity-0 invisible'>
                <div className='w-[160px] h-[120px]'>
                  {videoProcessed ? <>
                    <img src="" alt="..." loading='lazy' className='w-full h-full' id='player-previews--frame' />
                  </> : <div className='flex w-ful h-full justify-center items-center flex-col gap-[4px]'>
                    <OopsServerUnavailable height={60} width={60} />
                    <span className='text-[12px] text-white text-center font-extralight'>Відео ще не оброблене.</span>
                  </div>}
                </div>

                <p className='text-[14px] font-extralight text-white w-full h-full absolute bottom-0 flex justify-center items-end'>00:20</p>
              </div>

              <div ref={progressRef} className='absolute top-0 left-0 h-full gradient--secondary rounded-[4px] pointer-events-none z-30'></div>
              {/* <div ref={preloadRef} className='absolute top-0 left-0 h-[5px] gradient--secondary rounded-[4px] pointer-events-none z-30'></div> */}
              <div className={`w-full absolute left-0 flex justify-between items-center top-[12px] duration-200 ${playerSize[0] <= 500 ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                <p className='text-white text-[14px] font-extralight'>{getHrsMinsSecs(playerMoment[0]).pretty}</p>
                <p className='text-white text-[14px] font-extralight'>{getHrsMinsSecs(videoDuration).pretty}</p>
              </div>
            </> : null}
          </div>

          <div className='flex items-center gap-[12px]'>
            {/* Volume */}
            <div className={`duration-200 ${playerSize[0] <= 600 ? 'opacity-0 invisible absolute' : 'opacity-100 visible relative'}`} id='player-volume'>
              <button className='relative w-[40px] h-[32px]' onClick={() => muteVideo()}>
                <PlayerVolume width={40} height={32} className={`absolute top-0 left-0 duration-200 ${playerVolume > 10 && playerVolume < 80 ? 'opacity-100 visible' : 'opacity-0 invisible'}`} />
                <PlayerVolumeHight width={40} height={32} className={`absolute top-0 left-0 duration-200 ${playerVolume >= 80 ? 'opacity-100 visible' : 'opacity-0 invisible'}`} />
                <PlayerVolumeLow width={40} height={32} className={`absolute top-0 left-0 duration-200 ${playerVolume <= 10 && playerVolume !== 0 ? 'opacity-100 visible' : 'opacity-0 invisible'}`} />
                <PlayerVolumeMuted width={40} height={32} className={`absolute top-0 left-0 duration-200 ${playerVolume === 0 ? 'opacity-100 visible' : 'opacity-0 invisible'}`} />
              </button>

              <div id='player-volume--tooltip' className='w-[220px] bg-dark h-fit rounded-[4px] absolute -top-[50px] -left-[90px] z-[40] flex flex-col gap-[4px] items-center px-[12px] py-[6px] opacity-0 invisible'>
                <div className='relative w-full h-full'>
                  <Range
                    step={1}
                    min={0}
                    max={100}
                    values={[playerVolume]}
                    onChange={values => setPlayerVolume(values[0])}
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          position: 'relative'
                        }}
                        className='w-full h-[4px] rounded-[4px] bg-white/[.2] duration-200 hover:h-[8px] z-[33]'
                      >
                        {children}
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                        }}
                        className='w-[12px] h-[12px] rounded-[32px] gradient--secondary'
                      />
                    )}
                  />
                  <div ref={volumeRef} className='absolute top-0 left-0 h-full gradient--secondary rounded-[4px] pointer-events-none z-30'></div>
                </div>
                <p className='text-white text-[14px] font-extralight'>{playerVolume}</p>
              </div>
            </div>

            {/* PIP */}
            <button onClick={() => changePIP()} className={`duration-200 ${playerSize[0] <= 600 ? 'opacity-0 invisible absolute' : 'opacity-100 visible'}`}>
              <PlayerPIP width={32} height={32} />
            </button>

            {/* Settings */}
            <div className='relative flex justify-center items-center' id='player-settings'>
              <button onClick={() => setIsPlayerSettingsOpen(!isPlayerSettingsOpen)} className='relative'>
                <PlayerSettings width={32} height={32} />
              </button>

              <div id="player-settings--tooltip" className={`w-[220px] h-fit bg-dark rounded-[4px] absolute bottom-[150%] -left-[100px] px-[12px] py-[6px] duration-200 ${isPlayerSettingsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {/* General page */}
                {settingsPage === 'general' ? <ul className='flex flex-col gap-[4px]'>
                  <li className='flex items-center justify-between w-full cursor-pointer duration-200 hover:bg-grey' onClick={() => setSettingsPage('subs')}>
                    <div className='flex items-center gap-[8px]'>
                      <PlayerSubtitles width={24} height={24} />
                      <p className='text-white text-[14px]'>Субтитри</p>
                    </div>

                    <p className='text-[12px] text-white'>{subtitles}</p>
                  </li>

                  <li className='flex items-center justify-between w-full cursor-pointer duration-200 hover:bg-grey' onClick={() => setSettingsPage('speed')}>
                    <div className='flex items-center gap-[8px]'>
                      <PlayerSpeed width={24} height={24} />
                      <p className='text-white text-[14px]'>Швидкість</p>
                    </div>

                    <p className='text-[12px] text-white'>{speed}</p>
                  </li>

                  <li className='flex items-center justify-between w-full cursor-pointer duration-200 hover:bg-grey' onClick={() => setSettingsPage('qualities')}>
                    <div className='flex items-center gap-[8px]'>
                      <PlayerQuality width={24} height={24} />
                      <p className='text-white text-[14px]'>Якість</p>
                    </div>

                    <p className={`text-[12px] text-white py-[2px] px-[4px] rounded-[2px] uppercase ${playerQuality === 'q2k' ? 'gradient--primary' : ''}`}>{playerQuality.replace('q', '')}</p>
                  </li>

                  <li className='flex items-center justify-between w-full cursor-pointer duration-200 hover:bg-grey' onClick={() => setSettingsPage('volume')}>
                    <div className='flex items-center gap-[8px]'>
                      <PlayerVolume width={24} height={24} />
                      <p className='text-white text-[14px]'>Гучність</p>
                    </div>

                    <p className='text-[12px] text-white'>{playerVolume}</p>
                  </li>
                </ul> : null}

                {/* Qualities page */}
                {settingsPage === 'qualities' ? <ul className='flex flex-col gap-[12px]'>
                  <div className='flex items-center'>
                    <button onClick={() => setSettingsPage('general')} className='px-[6px] py-[6px] pl-0 duration-200 hover:bg-white/[.2] rouned-[2px]'>
                      <PlayerSettingsPrev width={16} height={10} />
                    </button>

                    <div className='flex justify-center w-full'>
                      <div className='flex justify-center items-center gap-[8px]'>
                        <PlayerQuality width={24} height={24} />
                        <p className='text-[14px] text-white'>Якість</p>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col gap-[4px]'>
                    {currentDub.eps.find(ep => ep.order === currentEp)?.source.q2k ? <>
                      <li className={`px-[4px] py-[2px] rounded-[2px] duration-200 hover:bg-grey cursor-pointer gradient--primary`} onClick={() => videoProcessed ? changeQuality('q2k') : null}>
                        <p className={`text-[14px] text-white ${videoProcessed ? '' : 'text-white/[.5]'}`}>2K</p>
                      </li>
                    </> : null}

                    {currentDub.eps.find(ep => ep.order === currentEp)?.source.q1080 ? <>
                      <li className={`px-[4px] py-[2px] rounded-[2px] duration-200 hover:bg-grey cursor-pointer ${playerQuality === 'q1080' ? 'bg-white/[.2]' : ''}`} onClick={() => changeQuality('q1080')}>
                        <p className='text-[14px] text-white'>1080</p>
                      </li>
                    </> : null}

                    {currentDub.eps.find(ep => ep.order === currentEp)?.source.q720 ? <>
                      <li className={`px-[4px] py-[2px] rounded-[2px] duration-200 hover:bg-grey cursor-pointer ${playerQuality === 'q720' ? 'bg-white/[.2]' : ''}`} onClick={() => videoProcessed ? changeQuality('q720') : null}>
                        <p className={`text-[14px] text-white ${videoProcessed ? '' : 'text-white/[.5]'}`}>720</p>
                      </li>
                    </> : null}

                    {currentDub.eps.find(ep => ep.order === currentEp)?.source.q480 ? <>
                      <li className={`px-[4px] py-[2px] rounded-[2px] duration-200 hover:bg-grey cursor-pointer ${playerQuality === 'q480' ? 'bg-white/[.2]' : ''}`} onClick={() => videoProcessed ? changeQuality('q480') : null}>
                        <p className={`text-[14px] text-white ${videoProcessed ? '' : 'text-white/[.5]'}`}>480</p>
                      </li>
                    </> : null}

                    {currentDub.eps.find(ep => ep.order === currentEp)?.source.q240 ? <>
                      <li className={`px-[4px] py-[2px] rounded-[2px] duration-200 hover:bg-grey cursor-pointer ${playerQuality === 'q240' ? 'bg-white/[.2]' : ''}`} onClick={() => videoProcessed ? changeQuality('q240') : null}>
                        <p className={`text-[14px] text-white ${videoProcessed ? '' : 'text-white/[.5]'}`}>240</p>
                      </li>
                    </> : null}
                  </div>
                </ul> : null}

                {/* Speed page */}
                {settingsPage === 'speed' ? <div className='flex flex-col gap-[4px] items-center'>
                  <div className='flex items-center mb-[12px] w-full'>
                    <button onClick={() => setSettingsPage('general')} className='px-[6px] py-[6px] pl-0 duration-200 hover:bg-white/[.2] rouned-[2px]'>
                      <PlayerSettingsPrev width={16} height={10} />
                    </button>

                    <div className='flex justify-center w-full'>
                      <div className='flex justify-center items-center gap-[8px]'>
                        <PlayerSpeed width={24} height={24} />
                        <p className='text-[14px] text-white'>Швидкість</p>
                      </div>
                    </div>
                  </div>

                  <div className='relative w-full h-full'>
                    <Range
                      step={0.25}
                      min={0.25}
                      max={2}
                      values={[speed]}
                      onChange={values => setSpeed(values[0])}
                      renderTrack={({ props, children }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            position: 'relative'
                          }}
                          className='w-full h-[4px] rounded-[4px] bg-white/[.2] duration-200 hover:h-[8px] z-[33]'
                        >
                          {children}
                        </div>
                      )}
                      renderThumb={({ props }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                          }}
                          className='w-[12px] h-[12px] rounded-[32px] gradient--secondary'
                        />
                      )}
                    />
                    <div className='absolute top-0 left-0 h-full gradient--secondary rounded-[4px] pointer-events-none z-30' style={{ width: `${((speed - 0.25) / 1.75 * 100).toFixed(2)}%` }}></div>
                  </div>
                  <p className='text-white text-[14px] font-extralight'>{speed}x</p>
                </div> : null}

                {/* Subs page //TODO COMPLETE AFTER ADD SUBS */}
                {settingsPage === 'subs' ? <div className='flex flex-col gap-[16px] items-center'>
                  <div className='flex items-center w-full'>
                    <button onClick={() => setSettingsPage('general')} className='px-[6px] py-[6px] pl-0 duration-200 hover:bg-white/[.2] rouned-[2px]'>
                      <PlayerSettingsPrev width={16} height={10} />
                    </button>

                    <div className='flex justify-center w-full'>
                      <div className='flex justify-center items-center gap-[8px]'>
                        <PlayerSubtitles width={24} height={24} />
                        <p className='text-[14px] text-white'>Субтитри</p>
                      </div>
                    </div>
                  </div>

                  <p className='text-[14px] text-white font-bold'>Субтитри в розробці</p>
                </div> : null}

                {/* Volume page */}
                {settingsPage === 'volume' ? <div className='flex flex-col gap-[4px] items-center'>
                  <div className='flex items-center mb-[12px] w-full'>
                    <button onClick={() => setSettingsPage('general')} className='px-[6px] py-[6px] pl-0 duration-200 hover:bg-white/[.2] rouned-[2px]'>
                      <PlayerSettingsPrev width={16} height={10} />
                    </button>

                    <div className='flex justify-center w-full'>
                      <div className='flex justify-center items-center gap-[8px]'>
                        <PlayerVolume width={24} height={24} />
                        <p className='text-[14px] text-white'>Гучність</p>
                      </div>
                    </div>
                  </div>

                  <div className='relative w-full h-full'>
                    <Range
                      step={1}
                      min={0}
                      max={100}
                      values={[playerVolume]}
                      onChange={values => setPlayerVolume(values[0])}
                      renderTrack={({ props, children }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            position: 'relative'
                          }}
                          className='w-full h-[4px] rounded-[4px] bg-white/[.2] duration-200 hover:h-[8px] z-[33]'
                        >
                          {children}
                        </div>
                      )}
                      renderThumb={({ props }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                          }}
                          className='w-[12px] h-[12px] rounded-[32px] gradient--secondary'
                        />
                      )}
                    />
                    <div className='absolute top-0 left-0 h-full gradient--secondary rounded-[4px] pointer-events-none z-30' style={{ width: `${(playerVolume).toFixed(2)}%` }}></div>
                  </div>
                  <p className='text-white text-[14px] font-extralight'>{playerVolume}</p>
                </div> : null}
              </div>
            </div>

            {/* Fullscreen */}
            <button className='w-[32px] h-[32px] relative' onClick={() => changeFullscreen()}>
              <PlayerEnterFS width={32} height={32} className={`absolute top-0 left-0 duration-200 ${isFullscreen ? `opacity-0 invisible` : `opacity-100 visible`}`} />
              <PlayerExitFS width={32} height={32} className={`absolute top-0 left-0 duration-200 ${isFullscreen ? `opacity-100 visible` : `opacity-0 invisible`}`} />
            </button>
          </div>
        </div>

        <video ref={videoRef} src={currentDub.eps.find(ep => ep.order == currentEp)?.source[playerQuality]!} className='absolute top-0 left-0 w-full h-full z-[29]' controls={false} preload='metadata'></video>

        <div className='w-full h-full flex justify-center items-center flex-col max-w-[500px] m-auto'>
          <h5 className='text-[24px] text-white'>Побачили це повідомлення?</h5>
          <p className='text-[16px] text-white text-center'>Ви, можливо, вибрали якість якої ще нема на сервері</p>
          <p className='text-[16px] text-white text-center'>Або відео просто ще не прогрузилось</p>
        </div>
      </div>

    </div>
  );
}

export default Player;