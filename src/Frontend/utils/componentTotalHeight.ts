const componentTotalHeight = (el: React.RefObject<HTMLDivElement>) => {
  const marginTop = parseInt(window.getComputedStyle(el.current as Element).getPropertyValue('margin-top'));
  const marginBottom = parseInt(window.getComputedStyle(el.current as Element).getPropertyValue('margin-bottom'));
  const elementHeight = el.current!.offsetHeight;
  return marginTop + marginBottom + elementHeight;
}

export default componentTotalHeight;