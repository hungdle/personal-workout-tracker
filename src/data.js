export const DAYS = ['Chủ nhật','Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7'];
export const SHORT = ['CN','T2','T3','T4','T5','T6','T7'];
export const DEFAULT_PLAN = {
  1:{title:'Pull + Core',kind:'gym',subtitle:'Lưng xô · Tay trước · Bụng',exercises:[
    ['Pull-up','3 × 6–8','reps',3,6,0],['Seated cable row','3 × 10–12','weight',3,10,0],['Face pull','3 × 12–15','weight',3,12,0],['Biceps curl','2 × 10–12','weight',2,10,0],['Hanging knee raise','3 × 10–12','reps',3,10,0],['Dead bug','2 × 10/bên','reps',2,10,0]]},
  2:{title:'Chạy + Học bơi sải',kind:'run',subtitle:'Zone 2 · Kỹ thuật bơi',exercises:[
    ['Chạy Zone 2','3 km','distance',1,3,0],['Học bơi sải','15–20 phút','minutes',1,20,0],['Bát Đoạn Cẩm','10 phút (tùy chọn)','minutes',1,10,0],['Bổ trợ gối / hông','8–10 phút (tùy chọn)','minutes',1,8,0]]},
  3:{title:'Push + Dips',kind:'gym',subtitle:'Ngực · Vai · Tay sau',exercises:[
    ['DB Bench Press','3 × 10–12 · 10 kg/tay','weight',3,12,10],['Dips','2 × 5–8','reps',2,6,0],['DB Shoulder Press','2 × 8–12','weight',2,10,0],['Lateral raise','3 × 12–15','weight',3,12,0],['Triceps pushdown','2 × 10–12','weight',2,10,0],['Reverse crunch','3 × 12–15','reps',3,12,0]]},
  4:{title:'Chạy + Recovery',kind:'run',subtitle:'Zone 2 · Phục hồi gối',exercises:[
    ['Chạy Zone 2','3 km','distance',1,3,0],['Bát Đoạn Cẩm','10 phút','minutes',1,10,0],['Glute bridge','2 × 12 (tùy chọn)','reps',2,12,0],['Side-lying hip abduction','2 × 12/bên (tùy chọn)','reps',2,12,0]]},
  5:{title:'Full Upper + Core',kind:'gym',subtitle:'Lưng · Ngực · Vai · Bụng',exercises:[
    ['Chin-up','3 × 6–8','reps',3,6,0],['Incline DB Press','3 × 10–12','weight',3,10,8],['Chest-supported row','3 × 10–12','weight',3,10,0],['Lateral raise','2 × 12–15','weight',2,12,0],['Hammer curl','2 × 10–12','weight',2,10,0],['Plank','3 × 30–45 giây','seconds',3,40,0]]},
  6:{title:'Chạy dài + Mobility',kind:'run',subtitle:'Zone 2 · Dịch Cân Kinh',exercises:[
    ['Chạy Zone 2','5 km','distance',1,5,0],['Dịch Cân Kinh','10–15 phút','minutes',1,15,0],['Bơi sải kỹ thuật','15 phút (tùy chọn)','minutes',1,15,0]]},
  0:{title:'Ngày nghỉ',kind:'rest',subtitle:'Ngủ đủ · Đi bộ nhẹ nếu thích',exercises:[['Thư giãn / đi bộ nhẹ','Tùy chọn','minutes',1,15,0]]}
};
export function makeExercise(row,index){return {id:`ex-${index}`,name:row[0],target:row[1],type:row[2],sets:row[3],reps:row[4],weight:row[5],done:false};}
export function localISO(date){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;}
export function parseISO(s){const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d);}
export function getMonday(date){const d=new Date(date);d.setHours(12,0,0,0);d.setDate(d.getDate()-((d.getDay()+6)%7));return d;}
