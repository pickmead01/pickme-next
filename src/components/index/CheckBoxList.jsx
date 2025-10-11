import React, { useCallback, useMemo } from 'react'

export default function CheckBoxList({ styles, checkBoxListRef }) {

  const checkList = new Map([
    ['google', { select: 0, alias: "Google廣告", name: "google" }],
    ['image', { select: 0, alias: "圖片廣告素材製作", name: "image" }],
    ['meta', { select: 0, alias: "Meta廣告", name: "meta" }],
    ['socialMedia', { select: 0, alias: "社群內容經營", name: "socialMedia" }],
    ['youtube', { select: 0, alias: "YouTube廣告", name: "youtube" }],
    ['shortVideo', { select: 0, alias: "短影音廣告素材製作", name: "shortVideo" }],
    ['line', { select: 0, alias: "LINE廣告", name: "line" }],
  ])

  const checkBoxList = useMemo(() => {
    let checkBoxList = []
    checkList.forEach((value, key) => {
      checkBoxList.push(value)
    })
    console.log("🚀 ~ file: contactUs.jsx:161 ~ checkList.values ~ checkBoxList:", checkBoxList)
    return checkBoxList
  }, [checkList])

  const onCheckBoxChange = useCallback((e) => {
    console.log("🚀 ~ file: CheckBoxList.jsx:38 ~ onCheckBoxChange ~ e:", e)
    if (checkBoxListRef.current === null) {
      checkBoxListRef.current = checkList
    }
    console.log(e.target.value);
    console.log(e.target.checked);
    console.log("🚀 ~ file: contactUs.jsx:23 ~ onCheckBoxChange ~ checkBoxListRef.current:", checkBoxListRef.current)
    const originValue = checkBoxListRef.current.get(e.target.value)
    console.log("🚀 ~ file: contactUs.jsx:24 ~ onCheckBoxChange ~ originValue:", originValue)

    checkBoxListRef.current.set(e.target.value,
      Object.assign({}, originValue, { select: e.target.checked ? 1 : 0 })
    )

    console.log("🚀 ~ file: contactUs.jsx:64 ~ onCheckBoxChange ~ checkBoxListRef.current:", checkBoxListRef.current)

  }, [checkBoxListRef, checkList])

  return <div data-title="諮詢項目（可複選）" className={`${styles['enter-checkbox-list']}`}>
    {
      checkBoxList.map((item, index) => {
        return <div key={index} className='flex flex-col items-start justify-start gap-4 w-[200px]'>
          <div data-title={item.alias} className={`${styles['enter-checkbox']}`}>
            <input
              type='checkbox'
              value={item.name}
              onChange={onCheckBoxChange} />
          </div>
        </div>
      })
    }
  </div>;
}
