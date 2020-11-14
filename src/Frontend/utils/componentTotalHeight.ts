const componentTotalHeight = (el: React.RefObject<HTMLDivElement>) => {
  const marginTop = parseInt(window.getComputedStyle(el.current as Element).getPropertyValue('margin-top'), 10);
  const marginBottom = parseInt(window.getComputedStyle(el.current as Element).getPropertyValue('margin-bottom'), 10);
  const elementHeight = el.current!.offsetHeight;
  return marginTop + marginBottom + elementHeight;
};

export default componentTotalHeight;
