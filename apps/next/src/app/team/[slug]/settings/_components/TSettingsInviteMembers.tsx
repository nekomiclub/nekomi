'use client';

import { FC, useEffect, useState } from 'react';
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu';
import { useDebounce } from 'use-debounce';

import StyledIcon from '~/shared/components/styled/StyledIcon';
import { UIField, UIFieldState } from '~/shared/components/UI/Input';
import { TTeam } from '~/shared/lib/api/api-types';



interface IProps {
  dubber: TTeam
}



const TSettingsInviteMembers: FC<IProps> = (props) => {
  const [searchQuery, setSearchQuery] = useState<UIFieldState>({ status: 'waiting', initialValue: '' });
  const [debouncedSearchQuery] = useDebounce(searchQuery.value ?? '', 500);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isNotFound, setIsNotFound] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);
  const [isSearched, setIsSearched] = useState(false);



  useEffect(() => {
    // (async function () {
    //   setIsSearched(true);

    //   const query = debouncedSearchQuery.replace('@', '');
    //   if (query.length < 3) return;

    //   try {
    //     const { results } = await APIOld.searchUsers({ q: query, parseInvitationStatusFor: dubber.id });
    //     setSearchResults(results);
    //     setIsMenuOpen(true);
    //   } catch (e) {
    //     HandleClientError(e);
    //   }
    // })();
  }, [debouncedSearchQuery]);

  // Handle isWaiting
  useEffect(() => {
    if (!isSearched) return;

    const isWaiting = debouncedSearchQuery.length === 0;

    setIsWaiting(isWaiting);

    if (isWaiting) {
      setSearchResults([]);
    }
  }, [debouncedSearchQuery]);

  // Handle isNotFound
  useEffect(() => {
    if (!isSearched) return;

    const isNotFound = debouncedSearchQuery.length !== 0 && searchResults.length === 0;

    setIsNotFound(isNotFound);

    if (isNotFound) {
      setIsMenuOpen(true);
    }
  }, [debouncedSearchQuery, searchResults]);



  return <div className="flex flex-col gap-[4px] w-full">
    <p className="text-grey-new ">Запросити нового учасника</p>

    <Menu className="w-full" gap={4} state={isMenuOpen} stateSetter={setIsMenuOpen} id="dubber-settings-inviteMemberMenu">
      <MenuTrigger anchor className="w-full">
        <UIField fieldType="input" state={searchQuery} stateSetter={setSearchQuery} placeholder="@username" disablePending className="" />
      </MenuTrigger>

      <MenuWrapper className="w-full bg-dark-bright rounded-[2px] flex flex-col border border-dark-light max-h-[300px] overflow-y-auto">
        {searchResults.length ? <>
          {/* {searchResults.map(result => {
            return <InviteMemberResult {...result} dubber={dubber} key={`dubber-settings-result--${result.user.id}`} />;
          })} */}
        </> : <div className="px-[12px] py-[8px]">
          {isNotFound && <div className="flex items-center gap-[16px]">
            <StyledIcon icon="IndeterminateQuestionBox" size={16} color="#f39c12 " />

            <p className="text-info-warn  max-md:text-[14px]">Ми не змогли знайти користувача за цим запитом</p>
          </div>}

          {isWaiting && <div className="flex items-center gap-[16px]">
            <StyledIcon icon="AlternateEmail" size={16} color="#555555" />

            <p className="text-grey-new  max-md:text-[14px]">Кого шукаємо?</p>
          </div>}
        </div>}
      </MenuWrapper>
    </Menu>
  </div>;
};

export default TSettingsInviteMembers;