var tipuesearch = {"pages": [{'title': 'About', 'text': '這裡是國立虎尾科技大學, 機械設計工程系, 網際內容管理(Web-based Content Management)課程網站. \n 靜態網頁:  https://mde.tw/wcm2024  and  https://s.cycu.org/~pj2022/wcm2024 \n 倉儲:  https://github.com/mdecycu/wcm2024', 'tags': '', 'url': 'About.html'}, {'title': 'cadlab', 'text': '網路設定 \n 移除\xa0 https://sun.aweray.com/tc/ \xa0 \n 移除 AnyDesk:\xa0 https://anydesk.com/en \xa0 \n 移除 TeamViewer:\xa0 https://www.teamviewer.com/ \xa0', 'tags': '', 'url': 'cadlab.html'}, {'title': 'Programming', 'text': 'C Programming: \n Tiny C compiler 相關搜尋 . \n Why  C ? \n Matlab \n Legacy  Domain-specific Language \n Control \n Portability \n Arduino \n C++ \n OOP \n \n cp2023 上課時所建立的檔案 (使用系上 DNS 設定): cadlab_network_setting.7z  (需要下載密碼) - 電腦輔助設計室網路設定批次與 Powershell 檔案 (註: 使用中華電信 IPv6 DNS 設定, w10 星期四之後無法在校網使用 hinet IPv6 DNS server 設定). w10_2b_cadlab_network_setting.7z  (需要下載密碼) - 電腦輔助設計室網路設定批次與 Powershell 檔案. tinyc.7z  (需要下載密碼) - 使用 Tiny C Compiler 編譯 C 程式, 包含 gd 與 gnuplot. python3114_git_putty.7z  (需要下載密碼) - 將近端 cmsimde 啟動並改版後推向 Github 所需的檔案. \n \n python Programming: \n 單機程式轉為全球資訊網服務： \n https://mde.tw/content/PDF.html \xa0 \n https://mde.tw/content/CAD.html \xa0 \n https://mde.tw/content/cp2022.html \xa0 \n 使用舊版 Python 建立新版的可攜程式系統: \n Python 3.12.0 沒有 tools.msi \n get-pip.py \n gen_portable_python312.py \n import urllib.request\nimport os\n \ndir_path = os.path.dirname(os.path.realpath(__file__))\n# basic files for Python installation\n# before 3.12.0\n#py_list = ["core", "dev", "exe", "lib", "tcltk", "tools"]\n# 3.12.1 no tools.msi\npy_list = ["core", "dev", "exe", "lib", "tcltk"]\n# Python version\nversion = "3.12.1"\n# Python msi download URL\nftp = "https://www.python.org/ftp/python/" + version + "/amd64/"\n# location for Portable Python\npath = "y:\\\\tmp\\\\Python312"\n# create directory\ntry:\n    os.mkdir(path)\nexcept:\n    # path exists\n    pass\n# get Python installation msi files and extract into target dir\nfor i in py_list:\n    filename = i + ".msi"\n    url = ftp + filename\n    # download basic python msi file\n    urllib.request.urlretrieve(url, filename)\n    os.system("msiexec.exe /a " + i + ".msi targetdir=" + path)\n    # delete msi file\n    os.remove(dir_path + "\\\\" + i + ".msi")\n    os.remove(path + "\\\\" + i + ".msi")\n \n cmsimde: \n https://github.com/mdecycu/cmsimde \n cmsimde 啟動需要下列模組: \n pip install flask flask_ cors  bs4 lxml pelican markdown leo pyopenssl \n Solving Ordinary Differential Equations in Python.pdf \n Python for Teenagers.pdf \n Challenging Programming in Python: A Problem Solving Perspective.pdf \n \n tcc with gd, raylib and sdl2.7z  (需要下載密碼) \n 解開壓縮後 取代原有 tinyc 可攜環境中的 tcc 目錄 , 並將  cpp.properties  檔案取代原有 wscite 目錄中的檔案後, 即可直接利用 wscite 編輯器中的 Tools - Go 利用 Tiny C Compiler 執行 C + gd, C + raylib, C + gnuplot 與 C + SDL2 等位於 tcc\\c_ex 目錄中的靜態與動態繪圖範例程式. \n https://libgd.github.io/manuals/2.2.3/ \n https://www.raylib.com/ \n https://github.com/libsdl-org/SDL \n https://github.com/simple2d/simple2d \xa0 \n https://github.com/ryanpcmcquen/basque \xa0 \n https://github.com/actsl/kiss_sdl \xa0 \n https://github.com/johnpayne-dev/MinecraftC \xa0 \n https://github.com/mdecycu/F1-Race \xa0 \n https://github.com/mdecycu/Run-Away  ( 下載 tcc 編譯連結後的可執行檔案 , 需要下載密碼) \n https://github.com/rapiz1/DungeonRush \xa0 \n https://github.com/pygame/pygame \xa0 \n https://github.com/pygame-community/pygame-ce \xa0 \n https://github.com/cxong/cdogs-sdl \xa0 \n https://github.com/fabiangreffrath/crispy-doom \xa0 \n https://github.com/agavrel/42_CheatSheet \xa0 \n https://www.cs.colby.edu/maxwell/courses/tutorials/maketutor/ \n https://lazyfoo.net/tutorials/SDL/ \xa0 \n https://hackmd.io/@seanyih/SDL2-tutorial/ \n C 程式的 gd 與 gnupot 繪圖 -> Brython Frontend + Python Backend ( cmsimde ) \n cmsimde \xa0 linked  with  Solid Edge Community edition \n Arduino Programming in C \n C 程式的動態繪圖 (Game or Simulation): \n C +  SDL  2D Game: 登入 Replit 後, 點擊  Basque , 將原始碼匯入 Repl 後, 按下 Run 執行 \n https://github.com/mdecycu/tinyc.games \n C 程式版次管理與資料庫系統: \n https://www.fossil-scm.org \n https://www.sqlite.org \n Python 的動態繪圖 (PyQt and Pysdl2): \n https://pyslvs.github.io \n https://github.com/py-sdl/py-sdl2 \n 然後呢? \n C/C++ and/or Qt: \n https://github.com/OpenModelica/OpenModelica \n https://github.com/modelica/VehicleInterfaces \n https://people.inf.ethz.ch/fcellier/Pubs/BG/ \n https://github.com/CoppeliaRobotics \n https://github.com/cyberbotics/webots \n https://github.com/Range-Software/range3 \n https://github.com/bulletphysics/bullet3 \n Rust: \n https://github.com/KmolYuan/efd-rs \n https://github.com/KmolYuan/four-bar-rs \n Typescript: \n https://github.com/PMKS-Web/PMKSWeb \n Mojo: \n https://github.com/modularml/mojo', 'tags': '', 'url': 'Programming.html'}, {'title': 'Replit', 'text': '當 Edge 瀏覽器中判定 Replit 啟動 cmsite 編輯網站為不安全的釣魚網站時: \n Settings - Privacy, search and services - Security -\xa0 Microsoft Defender SmartScreen 選擇關閉 \n \n 假如 Replit 關閉原先的 repl.co, 讓 cmsimde 啟動編輯之後, 只能在 Webview 頁面中運行, 儘管無法透過 Deployment 執行網際協同, 但仍可讓各學員用來編輯管理其從 Github 的倉儲與網站. \n 尤其若能讓各用戶利用 Replit 管理其取自 Github Classroom 的倉儲, 將更能提升 Github 與 Replit 在課程教學上的使用效能. \n 讓各學員取自 Github Classroom 的倉儲, 可以推向具有 Admin 權限的 Github 倉儲中: \n ssh-keygen 建立 .ssh/id_rsa 與 id_rsa.pub, 將 id_rsa.pub 放入 Github SSH 對應設定區 \n 建立 .ssh/config 如下: \n Host github.com\n# git clone 時的 URL 為 git@github.com:帳號/倉儲.git\nUser git\nHostname github.com\n# 因為 Replit 與 github.com  都支援 IPv4 網路協定因此無需代理主機設定\n# ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n References: \n https://intuitiveexplanations.com/tech/replit/', 'tags': '', 'url': 'Replit.html'}, {'title': 'Games', 'text': 'https://github.com/replit/kaboom \n https://github.com/replit/kaboomsite \n https://github.com/replit/replit-py \n https://github.com/replit/replit-ai-python \n https://github.com/replit/replit-ai-modelfarm-typescript \n', 'tags': '', 'url': 'Games.html'}, {'title': 'Typescript', 'text': 'PMKS 原始碼  (採  Silverlight ) \n PMKS + 原始碼  (採  Typescript ) \n pmks+ 平面機構設計範例1 ,  機構合成範例1 ,\xa0 \n 電子書: \n 2018 Pro Typescript \n 2019 Essential Typescript \n 2021 Developing Web Components with Typescript \n 2021 Essential Typescript4 \n 2022 Modern Full-Stack Development  \n 2023 Modern Typescript \n 2023 Typescript Basics \n', 'tags': '', 'url': 'Typescript.html'}, {'title': 'Servers', 'text': 'stud and stud2 servers are on 229, setup is on usr/portable_python3.10.6 directory. \n stud: 32GB Ram and 800GB HD \n stud2: 32GB Ram and 2TB HD \n', 'tags': '', 'url': 'Servers.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};