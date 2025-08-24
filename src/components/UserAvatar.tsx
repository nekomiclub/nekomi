'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { MaterialSymbol } from 'react-material-symbols';

import API from '~/services/ApiService';
import cn from '~/utils/classnames';

import { HandleClientError } from './Errors';
import StyledImage from './Styled/StyledImage';
import { NotifySuccess, NotifyWarn } from './UI/NotifyToast';



interface IProps {
  avatarUrl: string

  isEdit?: boolean
  entityType?: 'user' | 'dubber'
  className?: string

  /** User / Dubber ID */
  entityId?: string
}



const UserAvatar: FC<IProps> = ({ avatarUrl: initialAvatarUrl, entityId, entityType, isEdit, className }) => {
  const [avatarUrl, setAvatarUrl] = useState(initialAvatarUrl);
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
      NotifySuccess({ title: 'Завантажуємо аватар...', message: file.name });

      if (entityType === 'user') {
        return console.error(`[dev]: Entity type cannot be handled (${entityType})`);
      } else if (entityType === 'dubber') {
        const res = await API.putDubberAvatar({ dubberId: entityId, file });
        url = res.url;
      } else {
        return console.error(`[dev]: Entity type cannot be handled (${entityType})`);
      }

      setAvatarUrl(url);

      NotifySuccess({ title: 'Аватар оновлено', message: file.name });
    } catch (e) {
      HandleClientError(e);
    }
  }



  return <div className={cn(`relative w-[256px] h-[256px] rounded-0 overflow-hidden shrink-0 max-md:w-[128px] max-md:h-[128px]`, className)}>
    <StyledImage src={avatarUrl} width={'100%'} height={'100%'} alt="Dubber avatar" rounded={4} />

    {/* Edit layout */}
    {isEdit && <>
      <input type="file" accept=".png,.jpg,.webp" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />

      <button className="w-[32px] h-[32px] flex justify-center items-center rounded-[32px] absolute top-[8px] right-[8px] opacity-[.5] bg-dark-primary">
        <MaterialSymbol icon="edit" size={16} color="#fff" />
      </button>

      <button className={cn(`gui-ub-upload`, isDrag && 'gui-ub-upload--visible')} onClick={focusFileSelect} ref={fileSelectRef}>
        <MaterialSymbol icon="backup" size={64} className="text-white" />

        <div className="flex flex-col items-center gap-[8px]">
          <p className="text-white font-manrope font-bold text-[24px] uppercase">завантажити</p>
          <p className="text-white font-manrope text-[14px]">.png .jpg .webp, до 1го мегабайта</p>
          <p className="text-white font-manrope text-[12px]">Рекомендований розмір: 256х256</p>
        </div>
      </button>
    </>}
  </div>;
};

export default UserAvatar;