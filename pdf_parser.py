# from pypdf import PdfReader
import fitz

example_pdf = "lcsg01.pdf"
# def pdf_to_text(pdf_file):
#     reader = PdfReader(pdf_file)
#     print('Length of pages:', len(reader.pages))
#     begin = 0
#     end = len(reader.pages)
#     for i in range(begin, end):
#         page = reader.pages[i]
#         text = page.extract_text()
#         print(f'Page {i+1}:')
#         print(text)

def pdf_to_text(file):
    print(fitz.__doc__)
    pdf_document = fitz.open(file)
    num_of_pages = pdf_document.page_count
    print('Number of pages:', num_of_pages)
    for page_index in range(num_of_pages):
        page = pdf_document.load_page(page_index)
        text = page.get_text()
        print(text)


#pdf_to_text(example_pdf)