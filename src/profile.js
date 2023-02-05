import ScaleIcon from '@mui/icons-material/Scale';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
const iconStyle = {
    color: 'white', fontSize: 28
}

export const GreetingData = {
    title: 'قربة دم قد تغرس الحياة من جديد'
}
export const MedicalInstructions = [
    {
        title: 'الوزن',
        icon: <ScaleIcon sx={{ ...iconStyle }} />,
        description: 'يجب أن لا يقل الوزن عن 50 كيلو جرام'
    },
    {
        title: 'العمر',
        icon: <AccessibilityNewIcon sx={{ ...iconStyle }} />,
        description: 'يجب أن يكون عمر المتبرع فوق 18 سنة ولا يتجاوز 60 سنة'
    },
    {
        title: 'ضغط الدم',
        icon: <DeviceThermostatIcon sx={{ ...iconStyle }} />,
        description: 'يجب أن يكون ضفط الدم من 60/90 إلى 100/180 '
    }
]

export const AboutUsData = {
    title: '',
    body: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
    إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.
    هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.`
}