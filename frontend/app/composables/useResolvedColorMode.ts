export const useResolvedColorMode = () => {
  const colorMode = useColorMode();

  const isDark = computed(() => colorMode.value === "dark");
  const isLight = computed(() => colorMode.value === "light");

  const toggle = () => {
    colorMode.preference = isDark.value ? "light" : "dark";
  };

  const setMode = (mode: "light" | "dark" | "system") => {
    colorMode.preference = mode;
  };

  return {
    colorMode,
    isDark,
    isLight,
    toggle,
    setMode,
  };
};
