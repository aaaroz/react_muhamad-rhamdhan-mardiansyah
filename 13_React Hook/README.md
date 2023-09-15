# 13 React Hook

1. **React Hook** merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas. Hooks pada react terbagi menjadi 2, yang pertama dalah Hooks dasar, yang kedua adalah Hooks Tambahan.

2. dibawah ini beberapa fungsi yang termasuk kedalam hooks dasar dan hooks tambahan.
   | **Hooks Dasar** | **Hooks Tambahan** |
   | --------------- | ------------------- |
   | useState | useReducer |
   | useEffect | useCallback |
   | useContext | useMemo |
   | | useRef |
   | | useImperativeHandle |
   | | useLayoutEffect |
   | | useDebugValue |

3. **Aturan pada Hooks**

- _Hanya Panggil Hooks di Tingkat Atas_
  Jangan memanggil Hooks dari dalam Loops, conditions, atau nested functions
- \_Hanya Panggil Hooks dari Fungsi-Fungsi React
  Jangan memanggil Hooks dari fungsi-fungsi javaScript biasa.
  kita dapat:
  - Memanggil Hooks dari komponen-komponen fungsi react
  - Memanggil Hooks dari custom Hooks
