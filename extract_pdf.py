import PyPDF2

pdf_path = r"c:\Users\sneha\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\LocalState\sessions\18550711CB3040A0010415E5E84E56467230650E\transfers\2026-16\DOC-20260417-WA0011..pdf"

with open(pdf_path, 'rb') as file:
    reader = PyPDF2.PdfReader(file)
    text = ""
    for page in reader.pages:
        text += page.extract_text()
    print(text)