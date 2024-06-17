"use client";

import * as style from "@style/home/header.css";
import { Suspense, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";
import SearchResult from "./SearchResult";
import SearchResultFallBack from "./SearchResultFallback";
import { debounce } from "lodash";
import { useSetRecoilState } from "recoil";
import { localeState } from "@src/app/atom/global-atom";

export default function SearchForm({ locale }: { locale: string }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [debouncedKeyword, setDebouncedKeyword] = useState("");

  const delayedSearch = useCallback(
    debounce((keyword: string) => {
      setDebouncedKeyword(keyword);
    }, 400),
    [],
  );

  const setLocaleState = useSetRecoilState(localeState);
  useEffect(() => {
    setLocaleState(locale);
  }, [locale]);

  useEffect(() => {
    delayedSearch(watch("keyword"));
  }, [watch()]);

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <>
      <form className={style.search_bar_form} onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={style.search_field}>
          <legend className={style.hidden}>product search</legend>
          <label className={style.search_label} htmlFor="product-input">
            <input
              autoComplete="off"
              className={style.search_input}
              type="text"
              id="product-input"
              {...register("keyword", { required: true, maxLength: 20 })}
            />
            <span className={style.hidden}>Search</span>
            <span className={style.icon_wrapper}>
              <CiSearch className={style.icon} />
            </span>
          </label>
        </fieldset>
      </form>
      <Suspense fallback={<SearchResultFallBack />}>
        {debouncedKeyword && <SearchResult keyword={debouncedKeyword} />}
      </Suspense>
    </>
  );
}
