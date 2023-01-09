import { useEffect, useState } from "react";
import CommonService from "../services/Common";

export const useDebounce = (value, milliSeconds) => {
  const [debouncedValue, setDebouncedValue] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const handler = setTimeout(async () => {
      await CommonService.findData(value)
        .then((resp) => {
          setDebouncedValue(resp);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, milliSeconds);

    return () => {
      clearTimeout(handler);
    };
  }, [value, milliSeconds]);

  return { data: debouncedValue, isLoading };
};
