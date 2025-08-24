'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { MaterialSymbol } from 'react-material-symbols';

import API from '~/services/ApiService';
import cn from '~/utils/classnames';

import { HandleClientError } from './Errors';
import StyledImage from './Styled/StyledImage';
import { NotifySuccess, NotifyWarn } from './UI/NotifyToast';
import { UIReportButton } from './UI/Report';



interface Props {
  bannerUrl: string

  isEdit?: boolean
  entityType?: 'user' | 'dubber'

  /** User / Dubber ID */
  entityId?: string
}



const UserBanner: FC<Props> = ({ bannerUrl: initialBannerUrl, isEdit, entityId, entityType }) => {
  const [bannerUrl, setBannerUrl] = useState(initialBannerUrl);
  const [isDrag, setIsDrag] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileSelectRef = useRef<HTMLButtonElement>(null);



  // Handle drag and dtop
  useEffect(() => {
    if (!isEdit) return;

    const select = fileSelectRef.current;
    if (!select) return console.error(`[dev]: File select is not provided`);

    select.addEventListener('dragover', e => {
      e.preventDefault();
      setIsDrag(true);

      if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
    });

    select.addEventListener('dragend', () => setIsDrag(false));
    select.addEventListener('dragleave', () => setIsDrag(false));

    select.addEventListener('drop', e => {
      e.preventDefault();
      setIsDrag(false);

      const file = e.dataTransfer?.files[0];
      if (!file) return NotifyWarn({ title: 'Файл не завантажено', message: '' });

      uploadFile(file);
    });
  }, []);



  function focusFileSelect() {
    const input = fileInputRef.current;
    if (!input) return;

    input.value = '';
    input.click();
  }

  function handleFileChange() {
    const input = fileInputRef.current;
    if (!input) return console.error(`[dev]: Input not provided to function`);

    const file = input.files && input.files[0];
    if (!file) return NotifyWarn({ title: 'Файл не завантажено', message: '' });

    uploadFile(file);
  }

  async function uploadFile(file: File) {
    if (!entityId) return console.error(`[dev]: Entity id is not provided to the component`);

    let url: string;

    try {
      NotifySuccess({ title: 'Завантажуємо банер...', message: file.name });

      if (entityType === 'user') {
        const res = await API.userUploadBanner(file);
        url = res.bannerUrl;
      } else if (entityType === 'dubber') {
        const res = await API.putDubberBanner({ dubberId: entityId, file });
        url = res.url;
      } else {
        return console.error(`[dev]: Entity type cannot be handled (${entityType})`);
      }

      setBannerUrl(url);

      NotifySuccess({ title: 'Банер оновлено', message: file.name });
    } catch (e) {
      HandleClientError(e);
    }
  }



  return <div className="w-full h-fit aspect-[3.8] relative rounded-[4px] overflow-hidden max-h-[500px] min-h-[250px]">
    <StyledImage src={bannerUrl} width="100%" height="100%" alt={`Team banner`} />

    {/* Edit layout */}
    {isEdit && <>
      <input type="file" accept=".png,.jpg,.webp" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />

      <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[32px] absolute top-[16px] right-[16px] opacity-[.5] bg-dark-primary">
        <MaterialSymbol icon="edit" size={16} color="#fff" />
      </div>

      <button className={cn(`gui-ub-upload`, isDrag && 'gui-ub-upload--visible')} onClick={focusFileSelect} ref={fileSelectRef}>
        <MaterialSymbol icon="backup" size={128} className="text-white max-xl:!text-[64px]" />

        <div className="flex flex-col items-center gap-[8px]">
          <p className="text-white font-manrope font-bold text-[40px] uppercase max-xl:text-[32px]">завантажити</p>
          <p className="text-white font-manrope max-xl:text-[14px]">.png .jpg .webp, до 2х мегабайтів</p>
          <p className="text-white font-manrope max-xl:text-[14px]">Рекомендований розмір: 1920x500</p>
        </div>
      </button>
    </>}

    {/* Report button */}
    {!isEdit && <UIReportButton className="!absolute top-[8px] right-[8px] opacity-[.5] duration-200 hover:opacity-100 focus-visible:opacity-100" type="icon" text="Надіслати скаргу" />}
  </div>;
};

export default UserBanner;