export const useResolvedColorMode = () => {
  const colorMode = useColorMode();

  const mode = computed<"light" | "dark">(() => {
    return colorMode.value === "dark" ? "dark" : "light";
  });

  const isDark = computed(() => mode.value === "dark");
  const isLight = computed(() => mode.value === "light");

  const toggle = () => {
    colorMode.preference = isDark.value ? "light" : "dark";
  };

  const setMode = (mode: "light" | "dark" | "system") => {
    colorMode.preference = mode;
  };

  return {
    mode,
    isDark,
    isLight,
    toggle,
    setMode,
  };
};
